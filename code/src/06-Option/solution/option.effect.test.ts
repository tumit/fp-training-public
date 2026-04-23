import { pipe } from 'effect'
import { Option, some, none, isSome } from 'effect/Option'

const divideTwo = (n: number): number => 2 / n
const liftUp = (n: number): Option<number> => n === 0 ? none() : some(n)
const shouldDivideTwo = (o: Option<number>) => isSome(o) ? some(divideTwo(o.value)) : none

describe('Option Effect', () => {
  it('should compose two functions', () => {
    expect(
      pipe(
        1, liftUp, shouldDivideTwo
      )
    ).toEqual(some(2))
  })

  it('should return none if the input is 0', () => {
    expect(
      pipe(
        0, liftUp, shouldDivideTwo
      )
    ).toEqual(none)
  })
})