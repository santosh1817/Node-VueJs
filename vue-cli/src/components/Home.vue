import router from './router'
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
        aria-label="Toggle navigation"
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/users">Users</router-link>
          </li>
        </ul>
      </div>
    </nav>
  <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple contact manager app, built using MEVN stack </p>
  <hr class="my-4">
  <p></p>
  </div>

  </div>    


</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Home'
  }
  }
  
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>