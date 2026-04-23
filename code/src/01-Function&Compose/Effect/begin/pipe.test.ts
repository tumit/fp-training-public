import { flow } from "effect/Function"
// import { 
//   increment, 
//   toString, 
//   pipeIncrementThenToString,
//   flowIncrementThenToString } from "./pipe"

describe('incrementThenToString', () => {
  it('should increment the number and then convert it to a string with pipe', () => {
    //TODO: Implement pipeIncrementThenToString with Effect-pipe then uncomment the test.
    
    // expect(
    //   pipeIncrementThenToString(1)
    // ).toEqual('2')
  })

  it('should increment the number and then convert it to a string with flow', () => {
    //TODO: Implement pipeIncrementThenToString with Effect-flow then uncomment the test.

    // expect(
    //   flowIncrementThenToString(1)
    // ).toEqual('2')
  })

  it('should work when reuse increment and flow functions with my own flow', () => {
    //TODO: Implement my own flow with Effect-flow then uncomment the test.

    // const myFlow = flow(increment, toString)
    // expect(
    //   myFlow(1)
    // ).toEqual('2')
  })

  it('should work when reuse increment multiple times', () => {
    // const myFlow = flow(increment, increment, increment, toString)
    // expect(
    //   myFlow(1)
    // ).toEqual('4')
  })
})