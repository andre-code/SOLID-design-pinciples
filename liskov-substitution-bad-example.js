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
    return 'area: ' + this.length ** 2; // it give a different type result that the base class
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
  const area = s.area;
  salida = typeof(area) === 'string' ? area : `area: ${area}`; // it violate the Liskov principle as well, should't validate the result type
  console.log(salida);
}