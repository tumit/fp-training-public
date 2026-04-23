import { IO } from "fp-ts/lib/IO"

type Book = {
  id: number
  title: string
  author: string
}

export const fetchBooks = (): Promise<Book[]> =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => data as Book[])


// fetchBooks().then(books =>
//   console.log(books[0])
// )

export const ioFetchBooks = (): IO<Promise<Book[]>> =>
  () => fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => data as Book[])

// const FetchBooks2 = ioFetchBooks()
// FetchBooks2().then(books =>
//   console.log(books.length)
// )