export class Optional<T> {
    private readonly hasValue: boolean;
    private readonly value: T | null;

    private constructor(hasValue: boolean, value: T) {
        this.hasValue = hasValue;
        this.value = value;
    }

    public ifPresent(run: (value: T) => {}) {
        if (this.hasValue) run(this.value!)
    }

    public map<R>(mapper: (value: T) => R): Optional<R> {
        if (this.hasValue) return Optional.some(mapper(this.value!));
        return Optional.none();
    }

    public getOr(defaultVal: T): T {
        return this.hasValue ? this.value! : defaultVal;
    }

    public static some<T>(value: T): Optional<T> {
        return new Optional<T>(true, value);
    }

    public static none<T>(): Optional<T> {
        return new Optional<T>(false, null as T);
    }
}

export namespace EchoConstants {
    export const sessionId: string = "sessionId";
}