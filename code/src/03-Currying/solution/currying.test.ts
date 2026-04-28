import { pipe } from "effect"
import { convertToInternational, normalizePhoneNumber, toInternationalPhoneNumber } from "./currying"

describe('Currying', () => {
  it('should normalize phone number', () => {
    expect(normalizePhoneNumber('01012345678')).toBe('1012345678')
    expect(convertToInternational('66', '1012345678')).toBe('+661012345678')
  })

  it('should convert phone number to international format', () => {
    const forThailand = '66'
    expect(
      pipe(
        '01012345678',
        normalizePhoneNumber,
        toInternationalPhoneNumber(forThailand)
      )
    ).toEqual('+661012345678')
  })
})