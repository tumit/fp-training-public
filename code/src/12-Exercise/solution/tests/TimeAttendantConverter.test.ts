import { toTimeAttendant } from "../TimeAttendantConverter"

describe("TimeAttendantConverter", () => {
  it("should convert csv row into TimeAttendant", () => {
    const row = "001,2026-01-02,09:03,18:16"
    expect(
      toTimeAttendant(row)
    ).toEqual({
      employeeId: "001",
      date: "2026-01-02",
      clockIn: "09:03",
      clockOut: "18:16",
      workDay: 1
    })
  })
})