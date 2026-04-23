import { toWorkdaySummary } from "../WorkdaySummery"

describe("WorkdaySummery", () => {
  it("should return the workday summary", () => {
    const timeAttendants = [
      { employeeId: "001", date: "2026-01-02", clockIn: "09:03", clockOut: "18:16", workDay: 1 },
      { employeeId: "002", date: "2026-01-02", clockIn: "09:03", clockOut: "18:16", workDay: 1 },
      { employeeId: "002", date: "2026-01-03", clockIn: "09:03", clockOut: "18:16", workDay: 1 },
      { employeeId: "003", date: "2026-01-02", clockIn: "09:03", clockOut: "12:00", workDay: 0.5 },
      { employeeId: "003", date: "2026-01-03", clockIn: "13:03", clockOut: "18:16", workDay: 0.5 }
    ]
    expect(
      toWorkdaySummary(["001", "002", "003"])(timeAttendants)
    ).toEqual([
      { employeeId: "001", workDays: 1 },
      { employeeId: "002", workDays: 2 },
      { employeeId: "003", workDays: 1 }
    ])
  })
})