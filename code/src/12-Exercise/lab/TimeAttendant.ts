export type TimeAttendant = Readonly<{
  employeeId: string
  date: string
  clockIn: string
  clockOut: string
  workDay: number
}>

export type WorkDaySummary = Readonly<{
  employeeId: string
  workDays: number
}>