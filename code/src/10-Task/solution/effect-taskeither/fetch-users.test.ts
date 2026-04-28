import { Effect } from "effect"
import { requestUsers } from "./fetch-users"

const runRequestUsers = () => Effect.runPromise(requestUsers)

describe("fetch users with Effect TaskEither", () => {
  const originalFetch = globalThis.fetch

  afterEach(() => {
    globalThis.fetch = originalFetch
    jest.restoreAllMocks()
  })

  it("should succeed with users mapped to id, name, email only", async () => {
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

    expect(Array.isArray(result)).toBe(true)
    expect(result).toEqual([
      { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
    ])
  })

  it("should succeed with { error } when fetch rejects (network)", async () => {
    globalThis.fetch = jest.fn().mockRejectedValue(new Error("offline"))

    const result = await runRequestUsers()

    expect(result).toEqual({ error: "Network error" })
  })

  it("should succeed with { error } on non-OK HTTP response", async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 503,
      json: async () => ({}),
    } as Response)

    const result = await runRequestUsers()

    expect(result).toEqual({ error: "HTTP error: 503" })
  })

  it("should succeed with { error } when JSON parse fails", async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => {
        throw new SyntaxError("bad json")
      },
    } as unknown as Response)

    const result = await runRequestUsers()

    expect(result).toEqual({ error: "Invalid JSON" })
  })
})
