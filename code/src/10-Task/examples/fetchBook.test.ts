import { Effect } from "effect/index"
import { fetchBooks, ioFetchBooks } from "./fetchBook"

describe('fetchBook', () => {
  it('should fetch books', async () => {
    const books = await fetchBooks()
    expect(books.length).toBeGreaterThan(0)
  })

  it('should fetch books with io', async () => {
    const fetchBooks = ioFetchBooks()
    const books = await Effect.runPromise(
      Effect.promise(() => fetchBooks())
    )
    expect(books.length).toBeGreaterThan(0)
  })
})