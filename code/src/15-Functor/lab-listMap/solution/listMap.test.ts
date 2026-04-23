import { inc, listMap, sqr, map } from "./listMap"

describe('Functor listMap', () => {
  const increment = (n: number) => n + 1
  const square = (n: number) => n * n

  it('should increment a normal list', () => {
    expect(
      inc([1, 2, 3])
    ).toEqual(
      [2, 3, 4]
    )
  })

  it('should square a normal list', () => {
    expect(
      sqr([1, 2, 3])
    ).toEqual(
      [1, 4, 9]
    )
  })

  it('should increment each element in a list', () => {
    expect(
      listMap(increment)([1, 2, 3])
    ).toEqual(
      [2, 3, 4]
    )
  })

  it('should square each element in a list', () => {
    expect(
      listMap(square)([1, 2, 3])
    ).toEqual(
      [1, 4, 9]
    )
  })

  it('should map over a list with an arbitrary function', () => {
    expect(map(increment)([1, 2, 3])).toEqual([2, 3, 4])
    expect(map(square)([1, 2, 3])).toEqual([1, 4, 9])
  })
})