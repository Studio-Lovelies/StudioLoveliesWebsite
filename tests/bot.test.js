import test, {describe, it} from "node:test";
import {strict as assert} from "node:assert";

describe("test suite", () => {
  it("is always true", () => {
    assert(true);
  });

  test("val is 5", t => {
    t.diagnostic("***DIAGNOSTIC: about to assign val");
    const val = 2 + 2;
    t.diagnostic(`***DIAGNOSTIC: val=${val}`);
    assert.notEqual(5, val);
  });
});