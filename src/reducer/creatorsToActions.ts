type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;
type T = Unbox<{ a: "A"; b: "B"; c: "C" }>;

type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never;
};

export type CreatorsToActions<T> = Unbox<ReturnTypes<T>>;
