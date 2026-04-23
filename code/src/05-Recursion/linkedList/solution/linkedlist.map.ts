import { List, nil, cons, isNil } from "./linkedlist"

export const fmap = <A, B>(f: (a: A) => B) => (xs: List<A>): List<B> =>
  isNil(xs) 
    ? nil 
    : cons(f(xs.head), fmap(f)(xs.tail))