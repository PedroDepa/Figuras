class Shape {
    area() {
        return 0;
    }
  
    perimeter() {
      return 0;
    }
  
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
    semiperimetro() {
        return 0;
    }
}
  
class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}
  
class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
}
  
class Square extends Rectangle {
    constructor(l) {
        super(l, l);
    }
}
  
class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}


class Pentagon extends Shape {
    constructor(a, b) {
        super();
        this.apothem = a;
        this.base = b;
    }
    
    perimeter() {
        return 5 * this.base
    }

    area() {
        return this.perimeter() * this.apothem / 2
    }

}

class Rhomboid extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }
    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}


class TriangleV2 extends Shape{
    constructor(a, b, c) {
        super();
        this.lado1 = a;
        this.lado2 = b;
        this.lado3 = c;
    }
    semiperimetro() {
        return (this.lado1 + this.lado2 +this.lado3)/2;
    }
    area() {
        return  Math.sqrt(this.semiperimetro()*(this.semiperimetro() - this.lado1)*(this.semiperimetro()-this.lado2)*(this.semiperimetro()- this.lado3));
    }
}
export {Circle, Rectangle, Square, Triangle, Pentagon, Rhomboid, TriangleV2}



