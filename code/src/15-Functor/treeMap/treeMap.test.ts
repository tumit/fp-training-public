import { Tree } from "./tree"
import { TreeF } from "./treeMap"

const increment = (x: number) => x + 1
const toString = (x: number) => `${x}`

describe('Functor treeMap', () => {
  const tree: Tree<number> = {
    _tag: 'branch', value: 100,
    left: { _tag: 'leaf', value: 200 },
    right: { _tag: 'leaf', value: 300 }
  }
    
  it('should map over a tree with an arbitrary function', () => {
    expect(
      (new TreeF(tree)).fmap(increment)
    ).toEqual(new TreeF(
      {
        _tag: 'branch', value: 101,
        left: { _tag: 'leaf', value: 201 },
        right: { _tag: 'leaf', value: 301 }
      }
    ))
  })

  it('should map over a tree with a toString function', () => {
    expect(
      new TreeF(tree).fmap(toString)
    ).toEqual(new TreeF(
      {
        _tag: 'branch', value: '100',
        left: { _tag: 'leaf', value: '200' },
        right: { _tag: 'leaf', value: '300' }
      }
    ))
  })
})