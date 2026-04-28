import { Effect, Console } from "effect"
import { pipe } from "effect/Function"

const readLine: Effect.Effect<string> = Effect.succeed("OK")

const printLine = (message: string): Effect.Effect<void> =>
  Console.log(message)

export const program = pipe(
  readLine,
  Effect.map(str => `You entered: ${str}`),
  Effect.tap(message => printLine(message)) 
   
  // note: tap() Runs a side effect with the result of an effect without changing the original value.
) 