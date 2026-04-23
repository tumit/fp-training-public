import { toString, increment, incrementThenToString, compose } from "./compose"

describe('Composition', () => {
  it('should compose two functions', () => {
    expect(toString(increment(1))).toBe('2')
  })

  it('should compose two functions with incrementThenToString', () => {
    expect(
      incrementThenToString(1)
    ).toBe('2')
  })

  it('should compose two functions with my own compose', () => {
    expect(
      compose(increment, toString)(1)
    ).toBe('2')
  })
})