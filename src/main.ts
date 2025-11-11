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

export function analyzeArray(input: number[]) {
  const newObj = new ArrayAnalysis(input);
  return newObj;
}

export function caesarCipher(str: string, shift: number): string {
  let result: string[] = [];
  let k: number;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      k = ((c - 65 + shift) % 26) + 65;
      result.push(String.fromCharCode(k));
    } else if (c >= 97 && c <= 122) {
      k = ((c - 97 + shift) % 26) + 97;
      result.push(String.fromCharCode(k));
    } else result.push(str[i]);
  }
  return result.join("");
}
