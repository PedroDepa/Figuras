import {Circle, Rectangle, Square, Triangle, Pentagon, Rhomboid, TriangleV2} from './Shapes.js';

const triangle = new Triangle(10, 5);
const triangle2 = new Triangle(9, 19);
console.log(triangle.area());
console.log(triangle2.area());

const square = new Square(10);
console.log(`Area: ${square.area()} - Perimeter: ${square.perimeter()}`);

const rectangle = new Rectangle(10, 10);
console.log(`Area: ${rectangle.area()} - Perimeter: ${rectangle.perimeter()}`);

const circle = new Circle(10);
console.log(circle.perimeter());

const pentagon = new Pentagon(5, 10)
console.log(`Area: ${pentagon.area()} - Perimeter: ${pentagon.perimeter()}`);

const rhomboid = new Rhomboid(10, 5)
console.log(`Area: ${rhomboid.area()} - Perimeter: ${rhomboid.perimeter()}`)

const trianglev2 = new TriangleV2(5, 7, 9);
console.log(`Area: ${trianglev2.area()} - Perimeter: ${trianglev2.perimeter()} - Semiperimetro ${trianglev2.semiperimetro()}`);


