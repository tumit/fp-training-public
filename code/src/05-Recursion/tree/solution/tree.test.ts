import { sumTree, Tree } from "./tree"

describe('Tree', () => {
  it('should sum the values of a tree', () => {
    const tree: Tree<number> = {
      _tag: 'branch', value: 1,
      left: { _tag: 'leaf', value: 2 },
      right: { _tag: 'leaf', value: 3 }
    }
    expect(sumTree(tree)).toBe(6)
  })  
})