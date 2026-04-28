describe("Imperative map", () => {
  it('should double the value of a list', () => {
    const list = [1, 2, 3, 4, 5, 6]

    let doubledList: number[] = []
    for (const n of list) {
      doubledList.push(n * 2)
    }
    
    expect(doubledList).toEqual([2, 4, 6, 8, 10, 12])
  })
})