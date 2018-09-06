<template>
  <div class="front-cnvs-container" id="container">
  </div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'FrontCanvasCmp',
  components: {
  },
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 1;

        this.scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.06);
        let material = new Three.MeshNormalMaterial();

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new Three.WebGLRenderer({antialias: true, alpha: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        // container.appendChild(this.renderer.domElement);

    },
    animate: function() {
        setTimeout( () => {
          requestAnimationFrame(this.animate);
        }, 1000 / 25 );
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate()
  }
}
</script>

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.front-cnvs-container {
  position: absolute;
  display: block;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
