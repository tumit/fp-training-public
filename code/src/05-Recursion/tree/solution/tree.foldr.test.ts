import { Tree } from "./tree"
import { foldr } from "./tree.foldr"

const sum = (a: number, b: number) => a + b

describe('Tree.foldr', () => {
  it('should foldr a tree', () => {
    const fromTree: Tree<number> = {
      _tag: 'branch', value: 1,
      left: { _tag: 'leaf', value: 2 },
      right: { _tag: 'leaf', value: 3 }
    }

    expect(foldr(sum)(0)(fromTree)).toBe(6)
  })
})