import { TimeAttendant } from "./TimeAttendant"
import { toWorkHour } from "./WorkHourCalculator"

export const toTimeAttendant = (row: string): TimeAttendant => {
  return {
    employeeId: row.split(',')[0],
    date: row.split(',')[1],
    clockIn: row.split(',')[2],
    clockOut: row.split(',')[3],
    workDay: toWorkHour(row.split(',')[2])(row.split(',')[3])
  }
}