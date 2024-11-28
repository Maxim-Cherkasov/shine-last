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

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}