export const toWorkHour = (clockIn: string) => (clockOut: string) =>
  floorToHalfHour(clockIn)(clockOut) < 5.5 ? 0.5 : 1

const floorToHalfHour = (clockIn: string) => (clockOut: string) => (
  Math.floor(
    ((new Date(`1970-01-01T${clockOut}`).getTime() -
      new Date(`1970-01-01T${clockIn}`).getTime()) /
     (1000 * 60 * 60)) * 2
  ) / 2
)