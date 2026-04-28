import { pipe } from "effect/Function"
import { map } from "effect/Array"
import { loadCsv as loadCsvFileFrom } from "./CsvLoader"
import { toTimeAttendant } from "./TimeAttendantConverter"
import { WorkDaySummary } from "./TimeAttendant"
import { toWorkdaySummary } from "./WorkdaySummery"
import { distinctEmployee as byDistinctEmployeeIdsFrom } from "./DistinctEmployee"

export const summaryWorkDays = (path: string): WorkDaySummary[] => 
  pipe(
    loadCsvFileFrom(path),
    map(toTimeAttendant),
    timeAttendants => toWorkdaySummary(byDistinctEmployeeIdsFrom(timeAttendants))(timeAttendants)
  )