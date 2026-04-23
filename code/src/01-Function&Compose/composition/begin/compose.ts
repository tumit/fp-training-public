type Increment = (x: number) => number
export const increment: Increment = x => x + 1

type ToString = (x: number) => string
export const toString: ToString = x => `${x}`
