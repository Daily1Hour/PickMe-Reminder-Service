import { Transform } from "class-transformer";

export function TrimSeconds() {
    return Transform(({ value }) => {
        if (value instanceof Date) {
            value.setMinutes(0);
            value.setSeconds(0);
            value.setMilliseconds(0);
        }
        return value;
    });
}
