import * as E from "fp-ts/Either"
import { requestUsers } from "./fetch-users"

const runRequestUsers = () => requestUsers()

describe("fetch users with fp-ts TaskEither", () => {
  const originalFetch = globalThis.fetch

  afterEach(() => {
    globalThis.fetch = originalFetch
    jest.restoreAllMocks()
  })

  it("should return Right with users mapped to id, name, email only", async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        {
          id: 1,
          name: "Leanne Graham",
          email: "leanne@example.com",
          username: "Bret",
          phone: "1-770-736-8031",
        },
      ],
    } as Response)

    const result = await runRequestUsers()

    expect(E.isRight(result)).toBe(true)
    expect(result).toEqual(
      E.right([
        { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
      ])
    )
  })

  it("should return Left on network error when fetch rejects", async () => {
    globalThis.fetch = jest.fn().mockRejectedValue(new Error("offline"))

    const result = await runRequestUsers()

    expect(E.isLeft(result)).toBe(true)
    expect(result).toEqual(E.left("Network error"))
  })

  it("should return Left on non-OK HTTP response", async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 503,
      json: async () => ({}),
    } as Response)

    const result = await runRequestUsers()

    expect(E.isLeft(result)).toBe(true)
    expect(result).toEqual(E.left("HTTP error: 503"))
  })
})
