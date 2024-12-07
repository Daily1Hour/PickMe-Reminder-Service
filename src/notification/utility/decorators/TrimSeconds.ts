import { Transform } from "class-transformer";

export function TrimSeconds() {
    return Transform(({ value }) => {
        if (value instanceof Date) {
            value.setMinutes(0, 0, 0);
        }
        return value;
    });
}
