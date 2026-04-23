export type Foldr<A, B> = (f: (a: A, b: B) => B) => (base: B) => (xs: A[]) => B
export const foldr: Foldr<number, number> = (f) => (base) => (xs) =>
  xs.length === 0
    ? base
    : f(xs[0], foldr(f)(base)(xs.slice(1)))

export const add = (a: number, b: number) => a + b
export const sum = foldr(add)(0)

describe('Foldr', () => {
  it('should foldr a list', () => {
    expect(
      sum([1, 2, 3, 4])
    ).toBe(10)
  })
})