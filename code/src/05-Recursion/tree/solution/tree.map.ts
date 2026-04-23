import { Tree } from "./tree"

export const fmap = <A, B>(f: (a: A) => B) => (tree: Tree<A>): Tree<B> =>
  tree._tag === 'leaf'
    ? { _tag: 'leaf', value: f(tree.value) }
    : { 
      _tag: 'branch', 
      value: f(tree.value), 
      left: fmap(f)(tree.left), 
      right: fmap(f)(tree.right) 
    }