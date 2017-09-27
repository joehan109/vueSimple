<template>
  <div id="header">
    <div class="logo">
      <img :src="logoSrc" />
    </div>
    <ul class="tabs">
      <li v-for="tab in tabs"></li>
    </ul>
    <h2>{{userInfo.name}}{{userInfo.name1}}</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      logoSrc: '//source.qunarzz.com/common/hf/logo.png',
      tabs:[]
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  created () {
      this.$store.commit('getUserInfo')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#header{
  height: 40px;
  width: 100%;
  color: $themeFontColor;
  background-color: $themeBackgroundColor;
  border-bottom: 1px solid $themeBorderColor;
  display: flex;
  flex-direction: row;
  .logo{
    height: 100%;
    width: $navWidth;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
