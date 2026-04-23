import * as Either from "effect/Either"

const divideTwo = (divisor: number): Either.Either<number, string> =>
  divisor === 0
    ? Either.left("Division by zero error.")
    : Either.right(2 / divisor)

describe('divideTwo Effect', () => {
  it('should be Right when divisor is not zero, otherwise should be Left', () => {
    expect(
      divideTwo(4)
    ).toEqual(Either.right(0.5))
    expect(
      divideTwo(0)
    ).toEqual(Either.left("Division by zero error."))
  })

  it('should return the result when divisor is not zero', () => {
    const result = divideTwo(4)
    if (Either.isRight(result)) {
      expect(
        result.right
      ).toBe(0.5)
    } else {
      fail('should be Right')
    }
  })
})