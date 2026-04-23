import { toWorkHour } from "../WorkHourCalculator"

describe('TimeAttendant', () => {
  it('should calculate the all day work hour', () => {
    expect(toWorkHour('09:00')('18:01')).toBe(1)
  })

  it('should calculate the half day work hour (before 12:00)', () => {
    expect(toWorkHour('09:00')('12:35')).toBe(0.5)
  })

  it('should calculate the half day work hour (after 12:00)', () => {
    expect(toWorkHour('12:55')('18:10')).toBe(0.5)
  })
})