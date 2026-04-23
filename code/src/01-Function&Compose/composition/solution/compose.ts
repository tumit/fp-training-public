type Increment = (x: number) => number
export const increment: Increment = x => x + 1

type ToString = (x: number) => string
export const toString: ToString = x => `${x}`

type IncrementThenToString = (x: number) => string
export const incrementThenToString: IncrementThenToString = x => toString(increment(x))

// --- 3/5
export const compose = (increment: Increment, toString: ToString) =>
  (x: number) => toString(increment(x))

// --- 4/5
// type Compose = (increment: Increment, toString: ToString) => (x: number) => string
// export const compose: Compose = (increment, toString) =>
//   x => toString(increment(x))

// --- 5/5
// type Compose = <N, S>(
//   f: (y: N) => N,
//   g: (x: N) => S
// ) =>
//   (x: N) => S

// export const compose: Compose = (f, g) => x => g(f(x))
