const endofunctor = {
  map: <A, B>(f: (a: A) => B) => (fa: A[]) => fa.map(f),
}

const f = (n: number): string => `#${n}`;
const g = (s: string): number => s.length;

const fa = [1, 2, 3];    // F a
const fb = endofunctor.map(f)(fa); // F b
const fc = endofunctor.map(g)(fb); // F c

describe('Endofunctor', () => {
  it('should return the same type', () => {
    expect(fa).toEqual([1, 2, 3])
    expect(fb).toEqual(['#1', '#2', '#3'])
    expect(fc).toEqual([2, 2, 2])
  })
})