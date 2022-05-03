import React from 'react';
import Sketch from './Sketch';

const Sandstone = () => {
  const sketch = (p) => {
    const nlines = 150;
    const res = 100; // number of segments for each line
    const factor = 0.008; // noise factor
    const speed = 0.0015;
    let points = [];

    let W, H, xstep, ystep;

    p.setup = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      xstep = (W / nlines) * 4;
      ystep = H / res;

      p.createCanvas(W, H);
      p.strokeWeight(1);
      p.smooth(8);
      p.stroke('#272c35');

      for (let x = 0; x < nlines; x++) {
        for (let y = 0; y < res; y++) {
          points.push([]);
        }
      }
    };

    p.draw = () => {
      p.background('#1b1b1b');

      let i = 0;

      for (let x = 0; x < nlines; x++) {
        for (let y = 0; y < res; y++) {
          var n = p.noise(x * factor * 1.5 + p.frameCount * speed, (x + y) * factor + p.frameCount * speed);
          points[i] = p.createVector(x * xstep * n, y * ystep);
          i += 1;
        }
      }

      for (let id = 0; id < points.length - 1; id++) {
        if (id % res != res - 1) {
          if (id % res > 0 && id % res < res + 20) {
            // upper and lower edges
            if (id / res > -20 && id / res < nlines - 20) {
              // left and right edges

              p.line(points[id].x, points[id].y, points[id + 1].x, points[id + 1].y);
            }
          }
        }
      }
    };
  };

  return <Sketch {...{ sketch }} />;
};

export default Sandstone;
