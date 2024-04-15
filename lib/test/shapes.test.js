const Circle = require('../shapes.js');
require('jest-canvas-mock')


describe('Circle', () => {
    describe('draw', () => {
        it('should draw a blue circle', () => {
            const radius = 5;
            const color = 'blue';
            const circle = new Circle();
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            circle.draw(color, radius);

            // Assuming the draw method modifies the canvas, you can test the canvas content here
            expect(context.fillStyle).toBe('blue');
        });
    });
});