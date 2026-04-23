import { Effect, Console } from "effect"
import { right } from "effect/Either"
import { pipe } from "effect/Function"

// In this lab. IOEither wrap Effect because we want Error on the `left`, and right on the `right`
export type IOEither<E, A> = Effect.Effect<A, E>

const printLine = (message: string): IOEither<never, void> => Console.log(message)
const printHello: IOEither<never, void> = printLine('Hello')

export const program = (readLine: IOEither<string, string>) =>
  pipe(
    printHello,
    Effect.flatMap(() => readLine),
    Effect.flatMap((str) => right(`You entered: ${str}`)),
    Effect.match({
      onFailure: () => 'Error',
      onSuccess: (message) => message
    })
  )