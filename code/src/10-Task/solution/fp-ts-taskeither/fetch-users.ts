import { pipe } from "fp-ts/function"
import * as TE from "fp-ts/TaskEither"

type User = {
  id: number
  name: string
  email: string
}

const fetchResponse = (url: string): TE.TaskEither<string, Response> =>
  TE.tryCatch(
    () => fetch(url),
    () => "Network error"
  )

const checkStatus = (res: Response): TE.TaskEither<string, Response> =>
  res.ok
    ? TE.right(res)
    : TE.left(`HTTP error: ${res.status}`)

const parseJson = (res: Response): TE.TaskEither<string, unknown> =>
  TE.tryCatch(
    () => res.json(),
    () => "Invalid JSON"
  )

const fetchUsers = (url: string): TE.TaskEither<string, User[]> =>
  pipe(
    fetchResponse(url),
    TE.flatMap(checkStatus),
    TE.flatMap(parseJson),
    TE.map((data) => data as User[])
  )

export const requestUsers: TE.TaskEither<string, User[]> = pipe(
  fetchUsers("https://jsonplaceholder.typicode.com/users"),
  TE.map((users) => users.map(u => ({ id: u.id, name: u.name, email: u.email }))),
  TE.orElseW((err) => TE.left(err))
)

// requestUsers().then(console.log)