<template>
  <div class="back-cnvs-container" ref="canvas">
  </div>
</template>

<script>
// import VueP5 from 'vue-p5';
// import p5 from 'p5';
// import sketch from '../assets/canvases/Back.js';

export default {
  name: "BackCanvasCmp",
  components: {
    // VueP5,
  },
  data() {
    return {
      script: null,
      ps: null,
      ufo: {
        isShown: false,
        frames: [],
        x: 3000,
        y: 0,
        scale: 0.5,
        show: function(p) {
          p.image(
            this.frames[p.frameCount % this.frames.length],
            this.x,
            this.y
          ); //, 387 * this.scale, 200 * this.scale)
        },
        reset: function(p) {
          this.x = p.windowWidth / this.scale + 500;
          this.y = 0;
          this.scale;
        },
        update: function(p) {
          let speed = p.noise(p.frameCount / 100);
          speed = p.map(speed, 0, 1, 50, 70);
          this.x -= p.floor(speed);
          let y = p.noise(p.frameCount / 30);
          y = p.map(y, 0, 1, -50, p.windowHeight - 300);
          this.y = p.floor(y);

          // let scale = p.noise(p.frameCount / 40)
          // this.scale = p.map(scale, 0, 1, 0.02, 0.6)

          // this.x = p.mouseX,
          // this.y= p.mouseY
        }
      },
      bubbles: []
    };
  },
  mounted() {
    this.script = p => {
      const canvasWidth = p.windowWidth;
      const canvasHeight = p.windowHeight;

      p.preload = _ => {
        for (var i = 0; i < 25; i++) {
          let frame = p.loadImage(`./img/ufd_blue/ufo-sprite_${i}.png`);
          this.ufo.frames.push(frame);
        }
      };

      p.setup = _ => {
        this.canvas = p.createCanvas(canvasWidth, canvasHeight);
        p.noStroke();
        p.frameRate(25);
        for (var i = 0; i < 20; i++) {
          this.bubbles[i] = new this.Bubble(p);
        }
      };

      p.draw = _ => {
        p.background(255);
        this.handleUfo(p);
        this.bubbles.forEach((bubble, idx) => {
          bubble.update();
          bubble.show();
          if (
            bubble.alpha <= 40 ||
            bubble.scl < 4 ||
            bubble.posx < 0 ||
            bubble.posx > p.windowWidth + 60
          ) {
            this.bubbles.splice(idx, 1, new this.Bubble(p));
          }
        });
      };

      p.windowResized = _ => {
        // console.log('window resized');
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      setTimeout(
        p => {
          if (!this.ufo.isShown) {
            this.ufo.reset(p);
            this.ufo.isShown = true;
          }
        },
        3000,
        p
      );
    };

    const P5 = require("p5");
    this.ps = new P5(this.script, this.$refs.canvas);
  },
  methods: {
    handleUfo(p) {
      let scale = p.noise(p.frameCount / 40);
      this.ufo.scale = p.map(scale, 0, 1, 0.02, 0.6);
      if (this.ufo.isShown) {
        this.ufo.update(p);
        p.push();
        p.scale(this.ufo.scale);
        this.ufo.show(p);
        p.pop();
        if (this.ufo.x < -500) {
          this.ufo.isShown = false;
        }
      } else {
        if (Math.random() < 0.007) {
          this.ufo.reset(p);
          this.ufo.isShown = true;
        }
      }
    },
    Bubble(p) {
      this.scl = 30 + p.floor(p.random(-15, 15));
      this.alpha = 240;
      this.pos = {
        x: p.random(0, p.windowWidth),
        y: p.windowHeight + this.scl
      };
      // this.posx = p.floor(p.random(0,p.windowWidth));
      // this.posy = p.windowHeight + 45;;
      this.vel = {
        x: p.random(-1, 2),
        y: p.random(-4, -1)
      };
      // this.velx = p.floor(p.random(-5, 10));
      // this.vely = p.floor(p.random(-15, -5));
      this.acc = {
        x: 0,
        y: 0
      };

      this.show = () => {
        p.fill(204, this.alpha);
        p.ellipse(this.pos.x, this.pos.y, this.scl);
      };

      this.update = () => {
        this.attracted(p.mouseX, p.mouseY)

        this.vel = {
          x: this.vel.x + this.acc.x,
          y: this.vel.y + this.acc.y,
        };
        
        this.pos = {
          x: this.pos.x + this.vel.x,
          y: this.pos.y + this.vel.y,
        };

        this.acc = {
          x: 0,
          y: 0
        };
        // this.velx += p.floor(p.random(-5, 4))/3;
        // this.vely += p.floor(p.random(-1, 2))/2;
        // this.posx += this.velx;
        // this.posy += this.vely;
        this.alpha -= p.floor(p.random(5));
        this.scl -= p.random([1, 0, 0, 0, 0]);
      };

      this.attracted = (x, y) => {
        // var dir = target - this.pos
        let target = {
          x: x,
          y: y
        }
        // console.log('target:', target);
        
        // var force = p5.Vector.sub(target, this.pos);
        let force = {
          x: target.x - this.pos.x,
          y: target.y - this.pos.y
        }
        // var d = force.mag();
        let d = Math.floor(Math.sqrt(force.x * force.x + force.y * force.y));
          // d = constrain(d, 1, 25);
        if (d > 800) {
          d = 800
        } else if (d < 1) {
          d = 1
        }
        let G = 50;
        let strength = G / (d * d);
        let direction = Math.atan2(force.y, force.x);
        // force.setMag(strength);
        force = {
          x: Math.cos(direction) * strength,
          y: Math.sin(direction) * strength
        }
        if (d < 20) {
          // force.mult(-10);
          force = {
            x: force.x * -1.5,
            y: force.y * -1.5
          } 
        }
        // this.acc.add(force);
        let shmoop = 20
        this.acc = {
          x: (this.acc.x + force.x) * shmoop,
          y: (this.acc.y + force.y) * shmoop
        };
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.back-cnvs-container {
  position: absolute;
  display: block;
  z-index: -5;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
}
</style>
