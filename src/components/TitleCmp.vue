<template>
  <div class="Title">
    <h1>
      {{txt}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TitleCmp',
  props: {
    txt: String,
  },
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: Abril;
  src: url('../../lib/fonts/Abril_Fatface/AbrilFatface-Regular.ttf');
}

h1 {
  font-family: Abril;
  font-size: 4em;
  margin:0;
  text-align: left;
}

</style>
