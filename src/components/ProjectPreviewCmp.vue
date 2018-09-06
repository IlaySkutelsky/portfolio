<template>
  <div class="project-preview">
    <img :src="project.img">
    <h1>
      {{project.title}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ProjectPreviewCmp',
  props: ['project'],
  // data() {
  //   return {
  //     project: {
  //       name: 'TravelMaker'
  //     }
  //   }
  // }
  created() {
    // console.log('got project:', this.project);
    
  }
};
</script>

<style scoped lang="scss">
.project-preview {
  overflow: hidden;

  & img {
    width: 100%;
    transition: 0.3s;
  }

  &:hover img {
    transform-origin: center;
    transform: scale(1.05)
  }
}

</style>
