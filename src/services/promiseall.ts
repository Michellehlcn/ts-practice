type ReturnValue<T> = { -readonly [P in keyof T]:Awaited<T[P]>};

export default function promiseAll<T extends readonly unknown[] | []> (
    iterable:T,
    ): Promise<ReturnValue<T>>{
    return new Promise<Return Value<T;
}