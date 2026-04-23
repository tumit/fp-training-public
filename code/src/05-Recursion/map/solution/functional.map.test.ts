export const map = <A, B>(f: (a: A) => B) => (as: A[]): B[] =>
  as.length === 0
  ? []
  : [f(as[0]), ...map(f)(as.slice(1))]

export const double = (n: number) => n * 2

describe("Functional map", () => {
  it('should double the value of a list using map', () => {
    const toList = [1, 2, 3, 4, 5, 6]
    expect(
      map(double)(toList)
    ).toEqual(
      [2, 4, 6, 8, 10, 12]
    )
  })
})