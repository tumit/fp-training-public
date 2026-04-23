import { Either, Option, pipe } from "effect"

export const sum2 = (x: number) => (y: number) => x + y
export const sum3 = (x: number) => (y: number) => (z: number) => x + y + z

describe("Applicative", () => {
  it("Apply 2 and 3 Options of numbers with sum2, sum3 function", () => {
    expect(
      pipe(
        Option.some(sum2),
        Option.ap(Option.some(1)),
        Option.ap(Option.some(2))
      )
    ).toEqual(Option.some(3))

    expect(
      pipe(
        Option.some(sum3),
        Option.ap(Option.some(1)),
        Option.ap(Option.some(2)),
        Option.ap(Option.some(3))
      )
    ).toEqual(Option.some(6))
  })
  
  it("Apply some and none Options of none with sum function", () => {
      expect(
      pipe(
        Option.some(sum2),
        Option.ap(Option.some(1)),
        Option.ap(Option.none())
      )
    ).toEqual(Option.none())
  })

  it("Apply Either of right with sum3 function", () => {
    expect(
      pipe(
        Either.right(sum3),
        Either.ap(Either.right(1)),
        Either.ap(Either.right(2)),
        Either.ap(Either.right(3))
      )
    ).toEqual(Either.right(6))
  })

  it("Apply Either of left with sum function", () => {
    expect(
    pipe(
      Either.right(sum2),
      Either.ap(Either.right(1)),
      Either.ap(Either.left('error'))
    )
    ).toEqual(Either.left('error'))
  })
})