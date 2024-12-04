import { JwtInterceptor } from "./jwtInterceptor";
import { ExecutionContext, CallHandler, UnauthorizedException } from "@nestjs/common";
import { of } from "rxjs";
import verifier from "./verifier";

jest.mock("./verifier");

describe("JwtInterceptor", () => {
    let interceptor: JwtInterceptor;
    let mockExecutionContext: Partial<ExecutionContext>;
    let mockCallHandler: Partial<CallHandler>;

    beforeEach(() => {
        interceptor = new JwtInterceptor();
        mockExecutionContext = {
            switchToHttp: jest.fn().mockReturnValue({
                getRequest: jest.fn().mockReturnValue({
                    headers: {},
                }),
            }),
        };
        mockCallHandler = {
            handle: jest.fn().mockReturnValue(of(null)),
        };
    });

    it("should throw UnauthorizedException if no token is provided", async () => {
        await expect(
            interceptor.intercept(
                mockExecutionContext as ExecutionContext,
                mockCallHandler as CallHandler,
            ),
        ).rejects.toThrow(new UnauthorizedException("JWT token is missing"));
    });

    it("should throw UnauthorizedException if token is invalid", async () => {
        mockExecutionContext.switchToHttp().getRequest().headers["authorization"] =
            "Bearer invalid token";
        (verifier.verify as jest.Mock).mockRejectedValue(new Error("Invalid token"));

        await expect(
            interceptor.intercept(
                mockExecutionContext as ExecutionContext,
                mockCallHandler as CallHandler,
            ),
        ).rejects.toThrow(new UnauthorizedException("Invalid JWT token"));
    });

    it("should add user to request if token is valid", async () => {
        const decodedToken = { userId: "123" };
        mockExecutionContext.switchToHttp().getRequest().headers["authorization"] =
            "Bearer valid token";
        (verifier.verify as jest.Mock).mockResolvedValue(decodedToken);

        await interceptor.intercept(
            mockExecutionContext as ExecutionContext,
            mockCallHandler as CallHandler,
        );

        expect(mockExecutionContext.switchToHttp().getRequest().user).toEqual(decodedToken);
        expect(mockCallHandler.handle).toHaveBeenCalled();
    });
});
