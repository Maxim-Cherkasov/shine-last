// Function Overloading Examples
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

// Constructor overloading example
export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number);
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }
}

// Operator overloading example (TypeScript doesn't support direct operator overloading)
export class Vector {
  constructor(public x: number, public y: number) {}

  // Simulating operator overloading through methods
  plus(other: Vector): Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  scale(factor: number): Vector {
    return new Vector(this.x * factor, this.y * factor);
  }
}

// Usage examples
const calc = new Calculator();

// Using overloaded number addition
console.log(calc.add(5, 3));        // Output: 8

// Using overloaded string concatenation
console.log(calc.add("Hello ", "World")); // Output: Hello World

// Using overloaded multiplication
console.log(calc.multiply(4));      // Output: 16 (square)
console.log(calc.multiply(4, 5));   // Output: 20 (multiplication)

// Using overloaded constructors
const point1 = new Point();         // (0,0)
const point2 = new Point(5);        // (5,0)
const point3 = new Point(5, 10);    // (5,10)

// Using vector operations
const v1 = new Vector(1, 2);
const v2 = new Vector(3, 4);
const v3 = v1.plus(v2);            // Vector(4, 6)
const v4 = v3.scale(2);            // Vector(8, 12)