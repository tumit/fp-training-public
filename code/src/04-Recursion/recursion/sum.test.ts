type MySum = (ns: number[]) => number

const MySum: MySum = (ns) =>
  ns.length === 0
    ? 0
    : ns[0] + MySum(ns.slice(1))

describe('sum', () => {
  it('should sum an array of numbers', () => {
    expect(MySum([1, 2, 3])).toBe(6)
  })
})