<template>
  <div id="nav">
    <h2>{{userInfo.name}}{{userInfo.name1}}</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁4</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
    <h2>age: {{userInfo.age}} 岁1</h2>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  mounted () {
    const top = this.$el.offsetTop
    window.onscroll = this.$lodash.throttle((e) => {
      if (e.target.body.scrollTop >= top) {
        this.$el.style.top = 0
      } else {
        this.$el.style.top = (top - e.target.body.scrollTop) + 'px'
      }
    },100).bind(this);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#nav{
  @include qCalc(height, "100% - " + $footerHeight);
  width: 100px;
  color: $themeFontColor;
  background-color: $themeBackgroundColor;
  overflow-y: scroll;
  margin-bottom: $footerHeight;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  a {
    color: #42b983;
  }
}

</style>
