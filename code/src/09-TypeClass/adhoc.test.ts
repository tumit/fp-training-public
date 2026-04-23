type Show<A> = {
  toString: (a: A) => string
}

const showString = <A>(s: Show<A>) => (a: A) => s.toString(a)

const fromNumber: Show<number> = { toString: (a) => a.toString() }
const fromString: Show<string> = { toString: (a) => a }
const fromBoolean: Show<boolean> = { toString: (a) => a.toString() }

describe('Adhoc Polymorphism', () => {
  it('should replace type parameter with function parameter', () => {
    expect(showString(fromNumber)(1)).toEqual('1')
    expect(showString(fromString)('hello')).toEqual('hello')
    expect(showString(fromBoolean)(true)).toEqual('true')
  })
})