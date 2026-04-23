import { pipe } from "effect/Function";
import { flatMap, none, Option, some } from "effect/Option";

const divide = (a: number) => (b: number) => a / b

type SafeDivide = (a: number) => (b: number) => Option<number>
const safeDivide: SafeDivide = a => b => 
  b === 0 
    ? none() 
    : some(divide(a)(b))

  describe('safeDivide', () => {
  it('should return the result when the divisor is not zero', () => {
    expect(divide(10)(divide(10)(5))).toBe(5);
  })

  it('should return none when the divisor is zero', () => {
    expect(
      pipe(
        some(5),
        flatMap(safeDivide(10)),
        flatMap(safeDivide(10))
      )
    ).toEqual(some(5))
  })
})