import { sayHello } from "./typescript";

describe('TypeScript functional programming syntax playground', () => {
  it('works', () => {
    expect(
      sayHello('Functional Programming')
    ).toBe('Hello, Functional Programming')
  });
});