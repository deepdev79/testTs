import { describe, test, it, expect } from "vitest";
import { capitalize, reverseString, calculator, obj } from "../src/main";

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

describe("calculator", () => {
  it("adds 2 numbers if add method is called", () => {
    expect(calculator.add(5, 6)).toBe(11);
  });
  it("subtracts 2 numbers if subtract method is called", () => {
    expect(calculator.subtract(6, 3)).toBe(3);
  });
  it("mutiplies 2 numbers if multiply method is called", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });
  it("divides 2 numbers if divide method is called", () => {
    expect(calculator.divide(18, 3)).toBe(6);
  });
});

describe("obj", () => {
  it("creates and returns object", () => {
    const newObj = obj([2, 5, 33, 55, 69, 2]);
    expect(typeof newObj).toBe("object");
    expect(newObj).toHaveProperty("average", 27);
    expect(newObj).toHaveProperty("min", 2);
    expect(newObj).toHaveProperty("max", 69);
    expect(newObj).toHaveProperty("length", 6);
  });
});
