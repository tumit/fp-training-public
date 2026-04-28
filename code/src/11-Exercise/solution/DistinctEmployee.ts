import { pipe } from "effect/Function"
import { TimeAttendant } from "./TimeAttendant"
import { map, dedupe } from "effect/Array"

export const distinctEmployee = (timeAttendants: TimeAttendant[]): string[] =>
  pipe(
    timeAttendants,
    map(timeAttendant => timeAttendant.employeeId),
    dedupe
  )