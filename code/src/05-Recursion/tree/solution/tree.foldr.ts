import { Tree } from "./tree";

export const foldr = <A extends number, B extends number>(f: (a: A, b: B) => B) => (base: B) => (tree: Tree<A>): B =>
  tree._tag === 'leaf'
    ? (base + tree.value) as B
    : f(tree.value, foldr(f)(base)(tree.left)) + foldr(f)(base)(tree.right) as B