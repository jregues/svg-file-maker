// Shape class
class Shape {
    constructor(color, textColor) {
        this.color = color;
        this.textColor = textColor;
        
    }
    setColor(color) {
        this.color = color;
    }
}

// Circle class extending Shape
class Circle extends Shape {
    constructor(color, textColor) {
        super(color, textColor);
    }
     // Method to draw the shape
    render() {
       return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor(color, textColor) {
        super(color, textColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
} 

class Square extends Shape {
    constructor(color, textColor) {
        super(color, textColor);
    }

    render() {
        return  `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}


module.exports = {
Circle,
Triangle,
 Square
}