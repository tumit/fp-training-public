const toStringParametric = <A>(a: A) => `${a}`

describe('Parametric Polymorphism', () => {
  it('should replace type parameter with concrete type', () => {
    expect(toStringParametric(1)).toEqual('1')
    expect(toStringParametric('hello')).toEqual('hello')
    expect(toStringParametric(true)).toEqual('true')
  })
})