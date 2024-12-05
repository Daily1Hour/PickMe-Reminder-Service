import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    ValidationOptions,
    registerDecorator,
} from "class-validator";

// 커스텀 유효성 검사 데코레이터 정의
@ValidatorConstraint({ name: "AtLeastOneOption", async: false })
export class AtLeastOneOptionConstraint implements ValidatorConstraintInterface {
    validate(_value: any, { object }: ValidationArguments): boolean {
        // 객체가 비었는지 확인
        return Object.keys(object).length !== 0;
    }
}

export function AtLeastOneOption(validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: AtLeastOneOptionConstraint, // 유효성 검사기
        });
    };
}
