<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img class="ufo" src='../../img/ufo.gif'/>
  </div>
</template>

<script>
var THREE = require('three');

export default {
  mounted() {
    console.log('about mounted');
    const scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( 600, 600 );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;
  }
};
</script>


<style lang="scss" scoped>

.ufo {
  height: 30px;
}

</style>
