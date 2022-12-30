<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <school></school>
    <student></student>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MySchool from './components/MySchool.vue'
import MyStudent from './components/MyStudent.vue'

export default {
  name: 'App',
  components: {
    school:MySchool,
    student:MyStudent

  }
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
