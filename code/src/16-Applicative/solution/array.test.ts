import { pipe } from "effect/Function";
import { Array } from "effect";

const arrayAp = <A, B>(fa: ReadonlyArray<A>) =>
  (fab: ReadonlyArray<(a: A) => B>): Array<B> =>
    pipe(fab, Array.flatMap(f => pipe(fa, Array.map(f))))

const sum2 = (x: number) => (y: number) => x + y
const sum3 = (x: number) => (y: number) => (z: number) => x + y + z
const multiply2 = (x: number) => (y: number) => x * y

describe('Array Applicative', () => {
  it('should apply applicative product of 2 arrays of numbers with sum2 function', () => {
    expect(
      pipe(
        Array.of(sum2),
        arrayAp([1, 2, 3]),
        arrayAp([4, 5, 6])
      )
    ).toEqual([
      5, 6, 7, 
      6, 7, 8, 
      7, 8, 9])
  })

  it('should apply applicative product of 3 arrays of numbers with sum3 function', () => {
    expect(
      pipe(
        Array.of(sum3),
        arrayAp([1, 2]),
        arrayAp([3, 4]),
        arrayAp([5, 6])
      )
    ).toEqual([
      9, 10,
      10, 11,
      10, 11, 
      11, 12,
    ])
  })

  it('should apply applicative product of 2 arrays of numbers with multiply function', () => {
    expect(
      pipe(
        Array.of(multiply2),
        arrayAp([1, 2, 3]),
        arrayAp([4, 5, 6])
      )
    ).toEqual([
      4, 5, 6, 
      8, 10, 12, 
      12, 15, 18])
  })
})