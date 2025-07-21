<template>
  <div id="app">
       <nav>
      <router-link to="/">Головна</router-link>
      <router-link to="/requests">Запити</router-link>
      <router-link to="/dangerous-rides">Небезпечні атракціони</router-link>
      <router-link to="/blog-topics">Інші теми</router-link>
    </nav>
    <router-view />
    <CommentComponent />
   <FooterComponent />
  </div>
</template>

<script>

import CommentComponent from './components/CommentComponent.vue';
import FooterComponent from './components/FooterComponent.vue';



export default {
  name: 'App',
  components: {
  FooterComponent,
  CommentComponent
   },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  color:seagreen;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size:18px;
  text-decoration: none;
}
a:hover{
  color:aqua;
  font-size: 24px;
}
nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
}
router-link {
  text-decoration: none;
  color: #42b983;
}
</style>
