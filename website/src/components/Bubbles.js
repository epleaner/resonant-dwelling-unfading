import React from 'react';
import Sketch from './Sketch';
import p5 from 'p5';

const Sandstone = () => {
  const sketch = (p) => {
    let particles = [];
    let flowers = [];
    let flowfield;

    class Flowfield {
      constructor(scale = 10) {
        this.scale = scale;
        this.zoff = 0;
        this.inc = 0.1;
        this.show = false;

        this.cols = Math.floor(p.width / this.scale);
        this.rows = Math.floor(p.height / this.scale);

        this.field = new Array(this.cols * this.rows);
      }

      update = function () {
        for (let y = 0; y < this.rows; y++) {
          for (let x = 0; x < this.cols; x++) {
            let index = x + y * this.cols;
            let angle = p.noise(x * this.inc, y * this.inc, this.zoff) * p.TWO_PI;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;

            if (this.show) {
              p.stroke(0, 25);
              p.push();
              p.translate(x * this.scale, y * this.scale);
              p.rotate(v.heading());
              p.strokeWeight(1);
              p.line(0, 0, this.scale, 0);
              p.pop();
            }
          }

          this.zoff += 0.0003;
        }
      };

      toggleShow() {
        this.show = !this.show;
      }
    }

    class Particle {
      constructor(x, y, flowfield = new Flowfield()) {
        this.id = Date.now();
        this.pos = p.createVector(x, y);
        this.vel = p.createVector(0, 0);
        this.acc = p.createVector(0, 0);
        this.maxspeed = Math.random() * 5;
        this.flowfield = flowfield;
        this.touched = false;
        this.dead = false;

        this.prevPos = this.pos.copy();
      }

      update = function () {
        if (this.touched) {
          this.vel.add(this.acc);
          this.vel.limit(this.maxspeed);
          this.pos.add(this.vel);
          this.acc.mult(0);
        } else if (
          p.mouseX >= Math.floor(this.pos.x) - 5 &&
          p.mouseX <= Math.floor(this.pos.x) + 5 &&
          p.mouseY >= Math.floor(this.pos.y) - 5 &&
          p.mouseY <= Math.floor(this.pos.y) + 5
        )
          this.touched = true;
      };

      follow = function (vectors) {
        let x = Math.floor(this.pos.x / this.flowfield.scale);
        let y = Math.floor(this.pos.y / this.flowfield.scale);
        let index = x + y * this.flowfield.cols;
        let force = vectors[index];
        this.applyForce(force);
      };

      applyForce = function (force) {
        this.acc.add(force);
      };

      show = function () {
        p.stroke('#41454c');
        p.strokeWeight(1);
        p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
      };

      updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
      };
      edges = function () {
        if (this.pos.x > p.width) {
          this.dead = true;
        }
        if (this.pos.x < 0) {
          this.dead = true;
        }
        if (this.pos.y > p.height) {
          this.dead = true;
        }
        if (this.pos.y < 0) {
          this.dead = true;
        }
      };
    }

    class Flower {
      constructor(x, y, flowfield = new Flowfield()) {
        this.end = p.createVector(x, y);
        this.start = p.createVector(x, p.height);
        this.stems = [];
        this.curves = [];
        this.stemcount = 1;
        this.flowfield = flowfield;
        p.stroke(0, 50);
        p.line(this.end.x, this.end.y, this.start.x, this.start.y);
        this.radius = Math.random() * 75 + 25;

        for (let i = 0; i < this.radius * 20; i++) {
          const r = this.radius * p.sqrt(Math.random());
          const theta = Math.random() * 2 * p.PI;
          x = this.end.x + r * p.cos(theta);
          y = this.end.y + r * p.sin(theta);
          particles[particles.length] = new Particle(x, y, flowfield);
        }
      }

      update = function () {};

      show = function () {
        p.stroke('#2f3135');
        p.line(this.end.x, this.end.y, this.start.x, this.start.y);
      };
    }

    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
      flowfield = new Flowfield();
      for (let i = 0; i < 10; i++)
        flowers[flowers.length] = new Flower(
          p.map(Math.random(), 0, 1, 100, p.width - 100),
          p.map(Math.random(), 0, 1, 100, (p.height * 3) / 2),
          flowfield,
        );
      p.noFill();
    };

    p.draw = () => {
      p.background('#1b1b1b');

      flowfield.update();

      for (let i = 0; i < flowers.length; i++) {
        flowers[i].update();
        flowers[i].show();
      }

      for (let i = 0; i < particles.length; i++) {
        if (!particles[i].dead) {
          particles[i].follow(flowfield);
          particles[i].update();
          particles[i].edges();
          particles[i].show();
        }
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };
  };

  return <Sketch {...{ sketch }} />;
};

export default Sandstone;
