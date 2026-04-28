import { distinctEmployee } from "../DistinctEmployee"

describe("DistinctEmployee", () => {
  it("should return distinct employee ids", () => {
    const timeAttendants = [
      { employeeId: "001", date: "2026-01-02", clockIn: "09:03", clockOut: "18:16", workDay: 9.0 },
      { employeeId: "002", date: "2026-01-02", clockIn: "09:03", clockOut: "18:16", workDay: 9.0 },
      { employeeId: "002", date: "2026-01-03", clockIn: "09:03", clockOut: "18:16", workDay: 9.0 },
    ]
    const distinctEmployeeIds = distinctEmployee(timeAttendants)
    expect(distinctEmployeeIds).toEqual(["001", "002"])
  })
})