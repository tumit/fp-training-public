import { summaryWorkDays } from "../App"

describe("app", () => {
  it("should return the workday summary", () => {
    const fromCsvFile = "src/12-Exercise/solution/tests/clock-in-out.csv"
    const workDaySummary = summaryWorkDays(fromCsvFile)
    expect(
      workDaySummary
    ).toEqual([
      { employeeId: "001", workDays: 8 },
      { employeeId: "002", workDays: 8 },
      { employeeId: "003", workDays: 7.5 }
    ])
  })
})