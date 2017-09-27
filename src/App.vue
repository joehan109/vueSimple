<template>
  <div id="app">
    <qHeader></qHeader>
    <section id="main" ref="main">
      <qNav></qNav>
      <router-view id="content" ref="content"></router-view>
    </section>
    <qFooter ref="footer"></qFooter>
  </div>
</template>

<script>
import qHeader from '@/components/Header'
import qNav from '@/components/nav'
import qFooter from '@/components/footer'
import basebutton from '@/components/base/button.vue'

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
@import './assets/scss/reset.css';
@import url('http://common.qunarzz.com/lib/prd/element-ui/1.3.7/theme-default/index.css');

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
    margin-bottom: $footerHeight;
    flex-direction: row;
    align-items: stretch;
    display: flex;
    #nav {
    }
    #content{
      display: flex;
      flex: 1;
      margin-left: $navWidth;
      padding:20px;
      overflow: hidden;
      flex-direction: column;
    }
  }
  #footer{
    height: $footerHeight;
  }
}
</style>
