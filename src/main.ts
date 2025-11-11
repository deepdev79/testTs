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

class ArrayAnalysis {
  average: number;
  min: number;
  max: number;
  length: number;
  constructor(data: number[]) {
    this.length = data.length;
    this.average = Math.floor(
      data.reduce((acc, crr) => acc + crr) / this.length
    );
    this.min = data.reduce((acc, crr) => (acc = acc < crr ? acc : crr));
    this.max = data.reduce((acc, crr) => (acc = acc > crr ? acc : crr));
  }
}

export function obj(input: number[]) {
  const newObj = new ArrayAnalysis(input);
  return newObj;
}

// console.log(obj([2, 5, 33, 55, 69, 2]));
