export function capitalize(uinput: string): string {
  return uinput[0].toUpperCase();
}

export function reverseString(uinput: string): string {
  return uinput.split("").reverse().join("");
}

interface Calculator {
  add(x: number, y: number): number;
  subtract(x: number, y: number): number;
  multiply(x: number, y: number): number;
  divide(x: number, y: number): number;
}

export const calculator: Calculator = {
  add(x: number, y: number) {
    return x + y;
  },
  subtract(x: number, y: number) {
    return x - y;
  },
  multiply(x: number, y: number) {
    return x * y;
  },
  divide(x: number, y: number) {
    return x / y;
  },
};
