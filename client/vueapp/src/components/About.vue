<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'Welcome to about Vue js  page'
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
