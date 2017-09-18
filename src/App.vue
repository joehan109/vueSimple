<template>
  <div id="app">
    <qHeader></qHeader>
    <section id="main" ref="main">
      <qNav></qNav>
      <section id="content">
        <router-view id="mainView"></router-view>
      </section>
    </section>
    <qFooter></qFooter>
  </div>
</template>

<script>
import qHeader from '@/components/Header'
import qNav from '@/components/nav'
import qFooter from '@/components/footer'
export default {
  name: 'app',
  components: {
    qHeader,
    qNav,
    qFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $fontColor;
  font-size: $fontSize;
  display: flex;
  flex-direction: column;
  #main{
    flex-direction: column;
    display: flex;
    #nav {
      position: fixed;
    }
    #content{
      display: flex;
      flex:1;
      margin: 0 0 30px 100px;
      flex-direction: column;
      #mainView{
        flex: 1;
      }
    }
  }
  #footer{
    height: 30px;
  }
}
</style>
