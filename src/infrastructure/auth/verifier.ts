import { CognitoJwtVerifier } from "aws-jwt-verify";

const userPoolId = process.env.COGNITO_USER_POOL_ID;
const clientId = process.env.COGNITO_CLIENT_ID;

if (!userPoolId || !clientId) {
    throw new Error(
        "COGNITO_USER_POOL_ID and COGNITO_CLIENT_ID must be set in environment variables",
    );
}

export default CognitoJwtVerifier.create({
    userPoolId,
    clientId,
    tokenUse: "access",
});
