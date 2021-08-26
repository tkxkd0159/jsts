type FirstOrder<T, R> = (arg0: T) => R
type SecondOrder<T, R> = (arg0: T) => FirstOrder<T, R>
type ThirdOrder<T, R> = (arg0: T) => SecondOrder<T, R>

const add3: ThirdOrder<number, number> =
                                        (x: number): SecondOrder<number, number> =>
                                        (y: number): FirstOrder<number, number> =>
                                        (z: number): number => x + y + z