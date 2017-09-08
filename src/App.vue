<template>
  <div id="app">
    <qHeader></qHeader>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import qHeader from '@/components/Header'
export default {
  name: 'app',
  components: {
    qHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
