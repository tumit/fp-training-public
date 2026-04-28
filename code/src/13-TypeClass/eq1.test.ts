import { eqPerson, Person } from "./eq"

describe('Eq', () => {
  it('should compare 2 person equally', () => {
    const person1: Person = { name: 'John', age: 30 }
    const person2: Person = { name: 'John', age: 30 }
    expect(
      eqPerson.equals(person1, person2)
    ).toBeTruthy()
  })

  it('should compare 2 person not equally', () => {
    const person1: Person = { name: 'John', age: 30 }
    const person2: Person = { name: 'Jane', age: 20 }
    expect(
      eqPerson.equals(person1, person2)
    ).toBeFalsy()
  })
})