import { isNil, List } from "./linkedlist";

export const foldr = <A, B>(f: (a: A, b: B) => B) => (base: B) => (xs: List<A>): B =>
  isNil(xs)
    ? base
    : f(xs.head, foldr(f)(base)(xs.tail))