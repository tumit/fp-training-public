export type Show<A> = {
  f: (a: A) => string
}

// Show -> A -> string
export const toString = <A>(s: Show<A>) => (a: A) => s.f(a)

export const num: Show<number> = { f: a => `${a}` }
export const str: Show<string> = { f: a => a }
export const bool: Show<boolean> = { f: a => a ? 'true' : 'false' }

describe('toString', () => {
  it('should return the string representation of any type to string', () => {
    expect(toString(num)(1)).toEqual('1')
    expect(toString(str)('hello')).toEqual('hello')
    expect(toString(bool)(true)).toEqual('true')
    expect(toString(bool)(false)).toEqual('false')
  })
})