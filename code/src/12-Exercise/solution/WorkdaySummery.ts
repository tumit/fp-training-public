import type { TimeAttendant, WorkDaySummary } from "./TimeAttendant"
import { pipe } from "effect/Function"
import { map } from "effect/Array"

export const toWorkdaySummary = (employeeIds: string[]) => (timeAttendants: TimeAttendant[]): WorkDaySummary[] =>
  pipe(
    employeeIds,
    map(id => ({
      employeeId: id,
      workDays: timeAttendants
        .filter(timeAttendant => timeAttendant.employeeId === id)
        .reduce((acc, timeAttendant) => acc + timeAttendant.workDay, 0)
      })),
  )