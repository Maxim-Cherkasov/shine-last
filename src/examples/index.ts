import { Calculator } from './calculator/Calculator';
import { Point } from './geometry/Point';
import { Vector } from './geometry/Vector';

// Calculator examples
const calc = new Calculator();
console.log('Calculator Examples:');
console.log('Number addition:', calc.add(5, 3));
console.log('String concatenation:', calc.add("Hello ", "World"));
console.log('Square:', calc.multiply(4));
console.log('Multiplication:', calc.multiply(4, 5));

// Point examples
console.log('\nPoint Examples:');
const point1 = new Point();
const point2 = new Point(5);
const point3 = new Point(5, 10);
console.log('Default point:', point1.toString());
console.log('X-only point:', point2.toString());
console.log('Full point:', point3.toString());

// Vector examples
console.log('\nVector Examples:');
const v1 = new Vector(1, 2);
const v2 = new Vector(3, 4);
const v3 = v1.plus(v2);
const v4 = v3.scale(2);
console.log('Vector addition:', v3.toString());
console.log('Vector scaling:', v4.toString());