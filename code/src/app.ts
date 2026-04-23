import { flow } from "fp-ts/function"
import * as A from "fp-ts/Array"

const pairs = <A, B>(xs: A[], ys: B[]) =>
  flow(
    A.flatMap(x =>
      flow(
        A.flatMap(y => A.of([x, y] as const))
      )(ys)
    )
  )(xs)

console.log(pairs([1, 2, 3], ['a', 'b', 'c']))