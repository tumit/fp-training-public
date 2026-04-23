export type Count = (uniqueWords: string[]) => number
export type Unique = (words: string[]) => string[]
export type Words = (text: string) => string[]

export const count: Count = (uniqueWords) => uniqueWords.length
export const unique: Unique = (words) => [...new Set(words)]
export const words: Words = (text) => text.split(" ")

describe('Function', () => {
  it('should count unique words', () => {
    expect(
      count(unique(words("this cat this bat this dog this rat")))
    ).toEqual(5)
  })
})