type Eq<A> = {
  equals: (x: A, y: A) => boolean
}

type Person = Readonly<{
  name: string
  age: number
}>

const eqPerson: Eq<Person> = {
  equals: (x, y) => x.name === y.name && x.age === y.age
}

export { Eq, Person, eqPerson }