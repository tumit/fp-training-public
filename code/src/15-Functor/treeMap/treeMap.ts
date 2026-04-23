import { Tree } from "./tree"

interface Functor<A> {
  fmap<B>(f: (a: A) => B): Functor<B>
}

export class TreeF<A> implements Functor<A> {
  constructor(private readonly tree: Tree<A>) {}

  fmap<B>(f: (a: A) => B): TreeF<B> {
    return new TreeF(
      this.tree._tag === 'leaf'
        ? { _tag: 'leaf' as const, value: f(this.tree.value) }
        : {
            _tag: 'branch' as const,
            value: f(this.tree.value),
            left: new TreeF(this.tree.left).fmap(f).tree,
            right: new TreeF(this.tree.right).fmap(f).tree
          }
    )
  }
}