import { createParamDecorator, ExecutionContext, BadRequestException } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export function PayloadEX(DTOClass: any) {
    return createParamDecorator(async (_data: unknown, ctx: ExecutionContext) => {
        // 메시지의 payload 가져오기
        const payload = ctx.switchToRpc().getData();

        // DTO 변환
        const dtoInstance = plainToInstance(DTOClass, payload);

        // 유효성 검사
        const errors = await validate(dtoInstance);
        if (errors.length > 0) {
            throw new BadRequestException(
                `Validation failed: ${JSON.stringify(errors.map((e) => e.constraints))}`,
            );
        }

        return dtoInstance;
    })();
}
