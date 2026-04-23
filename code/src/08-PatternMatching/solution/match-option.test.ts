import { pipe } from 'effect/Function'
import { match, matchW, none, Option, some } from './match-option'

describe('Match Option', () => {
  it('should match some', () => {
    const someNumber: Option<number> = some(1)
    expect(
      pipe(
        someNumber,
        match(
          () => 'none',
          (x) => `${x}`
        )
      )
    ).toBe('1')
  })

  it('should match none', () => {
    const maybeNone: Option<never> = none
    expect(
      match(
        () => 'none',
        (x) => `${x}`
      )(maybeNone)
    ).toBe('none')
  })

  it('should matchW some', () => {
    const someNumber: Option<number> = some(1)
    expect(
      pipe(
        someNumber,
        matchW(
          () => 'none',
          (x) => x + 1
        )
      )
    ).toBe(2)
  })

  it('should matchW none', () => {
    const maybeNone: Option<never> = none
    expect(
      matchW(
        () => 'none',
        (x: number) => x + 1
      )(maybeNone)
    ).toBe('none')
  })
})