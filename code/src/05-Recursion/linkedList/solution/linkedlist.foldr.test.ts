import { foldr } from "./linkedlist.foldr"
import { cons, nil } from "./linkedlist"

describe('foldr.linkedlist', () => {
  const sum = (a: number, b: number) => a + b
  
  it('should foldr a linked list', () => {
    const fromLinkedList = cons(1, cons(2, cons(3, nil)))    
    expect(
      foldr(sum)(0)(fromLinkedList)
    ).toBe(6)
  })
})