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
            <router-link class="nav-link" to="/contact">contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  </div>

  <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3 @click.prevent="goTodetail()">{{data.productTitle}}</h3>
      </div>
  </div>

  </div>    


</template>
<script>
//import details from './details'

export default {
  name: 'Home',
  data() {
    return {
      title: 'Home',
      products:[
      {
        productTitle:"ABCN",
        image       : require('../assets/food1.jpg'),
        productId:1
      },
      {
        productTitle:"ABCN",
        image       : require('../assets/food2.jpeg'),
        productId:2
      },
      {
        productTitle:"Tino",
        image       : require('../assets/food1.jpg'),
        productId:3
      },
      {
        productTitle:"EFG",
        image       : require('../assets/logo.png'),
        productId:4
      },
      {
        productTitle:"MLI",
        image       : require('../assets/logo.png'),
        productId:5
      },
      {
        productTitle:"Banans",
        image       : require('../assets/logo.png'),
        productId:6
      }
      
      ]
  }
  },
  methods:{goTodetail() {
    this.$router.push({name:'details'})
  }
  }
  
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
