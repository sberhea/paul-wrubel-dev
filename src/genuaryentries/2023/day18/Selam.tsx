import { P5CanvasInstance, ReactP5Wrapper, Sketch } from "@p5-wrapper/react";
// import PI from "p5";

const WIDTH = 500;
const HEIGHT = 500;

const sketch: Sketch = (p5: P5CanvasInstance) => {
    p5.setup = () => {
        p5.createCanvas(WIDTH, HEIGHT);
        p5.createCanvas(500, 500);
        p5.background("#F2B84B");
    };

    p5.draw = () => {
        p5.fill("#D98943");
        p5.strokeWeight(5);

        p5.scale(1.05);
        p5.ellipse(240, 240, 80, 80);

        p5.translate(240, 240);
        for (let i = 0; i < 10; i++) {
            p5.fill("#D93425");
            p5.triangle(100, 100, 200, 240, 260, 240);
            p5.rotate(p5.PI / 10);
        }

        for (let i = 0; i < 10; i++) {
            p5.fill("#D93425");
            p5.triangle(100, 100, 200, 240, 260, 240);
            p5.rotate(p5.PI / 10);
        }
    };
};

const Entry = () => {
    return <ReactP5Wrapper sketch={sketch} />;
};

export default Entry;
