export type Tree<A> = Leaf<A> | Branch<A>

export type Leaf<A> = Readonly<{
  _tag: 'leaf'
  value: A
}>

export type Branch<A> = Readonly<{
  _tag: 'branch'
  value: A
  left: Tree<A>
  right: Tree<A>
}>

export type SumTree = (tree: Tree<number>) => number

export const sumTree: SumTree = tree =>
  tree._tag === 'leaf'
    ? tree.value
    : tree.value + sumTree(tree.left) + sumTree(tree.right)