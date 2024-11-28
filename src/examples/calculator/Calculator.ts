export class Calculator {
  // Method overloading with different parameter types
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    }
    return `${a}${b}`;
  }

  // Method overloading with different numbers of parameters
  multiply(a: number): number;
  multiply(a: number, b: number): number;
  multiply(a: number, b?: number): number {
    if (b === undefined) {
      return a * a; // Square if one parameter
    }
    return a * b;   // Multiply if two parameters
  }
}