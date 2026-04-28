type SumAll = (xs: number[]) => number

const sumAll: SumAll = (xs) => {
  if (xs.length === 0) {
    return 0
  }
  const [head, ...tail] = xs
  return head + sumAll(tail)
}

const sumAll2: SumAll = (xs) =>
  xs.length === 0 ?
    0 :
    xs[0] + sumAll2(xs.slice(1))
    

describe('Recursion', () => {
  it('should sum all numbers in an array', () => {
    expect(sumAll([])).toBe(0)
    expect(sumAll([1])).toBe(1)
    expect(sumAll([1, 2])).toBe(3)
  })

  it('should sum all numbers with functional style', () => {
    expect(sumAll2([])).toBe(0)
    expect(sumAll2([1])).toBe(1)
    expect(sumAll2([1, 2])).toBe(3)
  })
})