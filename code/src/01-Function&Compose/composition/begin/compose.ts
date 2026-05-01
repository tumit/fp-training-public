type Increment = (x: number) => number
export const increment: Increment = x => x + 1

type ToString = (x: number) => string
export const toString: ToString = x => `${x}`

// Start here...
type IncrementThenToString = (x: number) => string
export const incrementThenToString: IncrementThenToString = x => toString(increment(x))

type Compose = <N, S>(f: (x: N) => N, g: (y: N) => S) => (z: N) => S
export const compose: Compose = (f, g) => x => g(f(x))