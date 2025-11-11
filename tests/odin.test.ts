import { describe, test, it, expect } from "vitest";
import { capitalize, reverseString } from "../src/main";

describe("capitalize", () => {
  it("should capitalize and return first letter of any string", () => {
    expect(capitalize("hello")).toBe("H");
  });
});

describe("reverseString", () => {
  it("should reverse string and return the new string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});
