const quicksort = <A>(compare: (left: A, right: A) => boolean) => (xs: A[]): A[] => {
  if (xs.length <= 1) return xs
  const pivot = xs[0]
  const left = xs.filter(x => compare(x, pivot))
  const equal = xs.filter(x => !compare(x, pivot) && !compare(pivot, x))
  const right = xs.filter(x => compare(pivot, x))
  return [...quicksort(compare)(left), ...equal, ...quicksort(compare)(right)]
}

describe('Quick sort', ()=> {
  it('should sort an array of numbers', () => {
    expect(
      quicksort<number>((left, right) => left < right)([0,3,1,2,4,1])
    ).toEqual(
      [0,1,1,2,3,4]
    )
  })
})