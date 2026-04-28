import { Effect } from "effect";
import { program } from "./io";

describe("io", () => {
  it("should be able to console log", () => {
    const result = Effect.runSync(program);
    expect(result).toEqual('You entered: OK');
  });
});