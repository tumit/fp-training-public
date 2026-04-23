interface Semigroup<M> {
  concat: (x: M) => (y: M) => M;
}

interface Monoid<M> extends Semigroup<M> {
  empty: M;
}

const m: Monoid<number> = {
  empty: 0,
  concat: x => y => x + y,
}

describe('Monoid', () => {
  it('should return concat monoids of numbers', () => {
    expect(
      m.concat(m.empty)(m.concat(1)(m.concat(2)(3)))
    ).toEqual(6)
  })
})