import * as fs from "fs"

export const loadCsv = (path: string): string[] =>
  fs.readFileSync(path, "utf8").split("\n")