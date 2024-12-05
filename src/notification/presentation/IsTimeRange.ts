import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from "class-validator";

type TimeRange = {
    start_time?: Date;
    end_time?: Date;
};

@ValidatorConstraint({ async: false })
class TimeRangeConstraint implements ValidatorConstraintInterface {
    validate(value: TimeRange, args: ValidationArguments) {
        const { start_time, end_time } = args.object as TimeRange;

        // 동시에 존재하거나 동시에 존재하지 않아야 함
        // 시작 시간은 종료 시간보다 작아야 함
        return !!start_time === !!end_time && start_time < end_time;
    }

    defaultMessage(_args: ValidationArguments) {
        return `"start_time" and "end_time" must both be provided or both omitted.`;
    }
}

// 데코레이터 생성
export function IsTimeRange(validationOptions?: ValidationOptions) {
    return function (object: TimeRange, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: TimeRangeConstraint, // 유효성 검사기
        });
    };
}
