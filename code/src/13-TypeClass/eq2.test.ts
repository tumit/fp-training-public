import { Eq, eqPerson, Person } from "./eq"

const contains = <T>(eq: Eq<T>) =>
  (elem: T) =>
    (elems: T[]): boolean =>
      elems.some((x: T) => eq.equals(x, elem))

const EqNumber: Eq<number> = {
  equals: (x, y) => x == y
}

const EqString: Eq<string> = {
  equals: (x, y) => x == y
}

describe('Reuse Equal', () => {
  it('should compare 2 equally numbers and strings', () => {
    expect(contains(EqNumber)
      (1)
      ([1, 2, 3])
    ).toBeTruthy()

    expect(contains(EqString)
      ('hello')
      (['hello', 'world'])
    ).toBeTruthy()
  })

  it('should compare 2 Person equally', () => {
    const person1: Person = { name: 'John', age: 30 }
    const person2: Person = { name: 'John', age: 30 }
    const listOfPerson = [person1, person2]

    expect(
      contains(eqPerson)
        (person1)
        (listOfPerson)
    ).toBeTruthy()
  })
})