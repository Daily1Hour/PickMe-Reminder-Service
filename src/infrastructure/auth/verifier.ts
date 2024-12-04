import { CognitoJwtVerifier } from "aws-jwt-verify";

const userPoolId = process.env.COGNITO_USER_POOL_ID;
const clientId = process.env.COGNITO_CLIENT_ID;

export default CognitoJwtVerifier.create({
    userPoolId,
    clientId,
    tokenUse: "access",
});
