class Shape {
  get area() {
    return 0;
  }
}
class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  get area() {
    return this.length * this.width;
  }
}
class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
  get area() {
    return this.length ** 2;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  get area() {
    return Math.PI * (this.radius ** 2);
  }
}
const shapes = [
  new Rectangle(1, 2),
  new Square(1, 2),
  new Circle(2),
]
for (let s of shapes) {
  console.log(`area: ${s.area}`);
}