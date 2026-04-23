import { convertToInternational, normalizePhoneNumber } from "./currying"

describe('Currying', () => {
  it('should normalize phone number', () => {
    expect(normalizePhoneNumber('01012345678')).toBe('1012345678')
    expect(convertToInternational('66', '1012345678')).toBe('+661012345678')
  })
})