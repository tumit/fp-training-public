import { Either, right, match, left } from "./match-either"

describe('Match Either', () => {
  it('should match right to string', () => {
    const errorOrNum: Either<string, number> = right(12)
    expect
      (match(
        (e: string) => e,
        (a: number) => `value is ${a}`
      )(errorOrNum)
      ).toEqual(`value is 12`)
  })
  it('should also match left to string', () => {
    const errorOrNum: Either<string, number> = left(`error`)
    expect(
      match(
        (e: string) => e,
        (a: number) => `value is ${a}`
      )(errorOrNum)
    ).toEqual(`error`)
  })
})