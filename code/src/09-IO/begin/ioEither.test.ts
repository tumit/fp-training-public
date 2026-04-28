import { Effect } from "effect"
// import { IOEither, program } from "./ioEither"

describe("ioEither", () => {
  // const rightReadLine: IOEither<string, string> = Effect.succeed('OK')
  // const leftReadLine: IOEither<string, string> = Effect.fail('Error')

  it("should be able to read string from console and print it", () => {
    // expect(
    //   Effect.runSync(program(rightReadLine))
    // ).toEqual('You entered: OK')
  })

  it("should be able to read string from console", () => {
    // expect(Effect.runSync(program(leftReadLine))).toEqual('Error')
  })
})
