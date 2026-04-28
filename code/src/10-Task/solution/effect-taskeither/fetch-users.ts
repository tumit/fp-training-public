import { Effect } from "effect"

type User = {
  id: number
  name: string
  email: string
}

const fetchResponse = (url: string) =>
  Effect.tryPromise({
    try: () => fetch(url),
    catch: () => "Network error"
  })

const checkStatus = (res: Response) =>
  res.ok
    ? Effect.succeed(res)
    : Effect.fail(`HTTP error: ${res.status}`)

const parseJson = (res: Response) =>
  Effect.tryPromise({
    try: () => res.json(),
    catch: () => "Invalid JSON"
  })

const fetchUsers = (url: string) =>
  fetchResponse(url).pipe(
    Effect.flatMap(checkStatus),
    Effect.flatMap(parseJson),
    Effect.map((data) => data as User[])
  )

export const requestUsers =
  fetchUsers("https://jsonplaceholder.typicode.com/users").pipe(
    Effect.map(users => users.map(u => ({ id: u.id, name: u.name, email: u.email }))),
    Effect.catchAll(err => Effect.succeed({ error: err }))
  )