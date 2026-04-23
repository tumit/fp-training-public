import { flow, pipe } from 'effect'

export const increment = (n: number) => n + 1
export const toString = (n: number) => `${n}`

export const pipeIncrementThenToString = (n: number) => pipe(n, increment, toString)
export const flowIncrementThenToString = flow(increment, toString)
