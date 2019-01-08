<template>
  <div id="app">
    <v-app id="inspire">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
    </v-app>
  </div>
  
</template>

<script>
import Navbar from './components/Navbar';
import NewEmployee from './components/NewEmployee';
import Footer from './components/Footer';
export default {
  name: 'app',
  components: {
    Navbar,
    NewEmployee,
    Footer
  }
}
</script>

<style>
  nav {
    margin-bottom:10px;
  }
</style>
