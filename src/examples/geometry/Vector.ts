export class Vector {
  constructor(public x: number, public y: number) {}

  // Simulating operator overloading through methods
  plus(other: Vector): Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  scale(factor: number): Vector {
    return new Vector(this.x * factor, this.y * factor);
  }

  toString(): string {
    return `Vector(${this.x}, ${this.y})`;
  }
}