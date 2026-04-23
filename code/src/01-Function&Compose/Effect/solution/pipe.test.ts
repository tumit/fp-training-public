import { flow } from "effect/Function"
import {
  increment,
  toString,
  pipeIncrementThenToString,
  flowIncrementThenToString
} from "./pipe"

describe('incrementThenToString', () => {
  it('should increment the number and then convert it to a string with pipe', () => {
    expect(
      pipeIncrementThenToString(1)
    ).toEqual('2')
  })

  it('should increment the number and then convert it to a string with flow', () => {
    expect(
      flowIncrementThenToString(1)
    ).toEqual('2')
  })

  it('should work when reuse increment and flow functions with my own flow', () => {
    const myFlow = flow(increment, toString)
    expect(
      myFlow(1)
    ).toEqual('2')
  })

  it('should work when reuse increment multiple times', () => {
    const myFlow = flow(increment, increment, increment, toString)
    expect(
      myFlow(1)
    ).toEqual('4')
  })
})