<template>
  <div id="app">
    <DangerousridesComponent />
    <CommentComponent />
    <FooterComponent />
  </div>
</template>

<script>
import DangerousridesComponent from './components/DangerousridesComponent.vue';
import CommentComponent from './components/CommentComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'App',
  components: {
    DangerousridesComponent,
    CommentComponent,
    FooterComponent
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
</style>
