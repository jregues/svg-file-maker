// Shape class
class Shape {
    constructor(color) {
        this.color = color;
    }
}

// Circle class extending Shape
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
     // Method to draw the shape
    draw(context) {
        context.beginPath();
    context.arc(radius, radius, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    }
}

class Triangle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw(context) {
        context.beginPath();
        context.moveTo(this.sideLength / 2, 0); // Top point
        context.lineTo(0, this.sideLength); // Bottom left point
        context.lineTo(this.sideLength, this.sideLength); // Bottom right point
        context.closePath(); // Close the path to complete the triangle
        context.fillStyle = this.color;
        context.fill();
    }
} 


module.exports = Circle;
module.exports = Triangle;