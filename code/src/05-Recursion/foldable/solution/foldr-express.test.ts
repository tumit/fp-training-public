import { reduce, reduceRight } from "effect/Array"

const add = (a: number, b: number) => a + b

describe("Foldr (reduceRight)", () => {
  it("should foldr a list", () => {
    const xs = [1, 2, 3, 4]
    const result = reduceRight(xs, 0, add)
    expect(result).toBe(10)
  })

  it("should foldl a list", () => {
    const xs = [1, 2, 3, 4]
    const result = reduce(xs, 0, add)
    expect(result).toBe(10) 
  })
})