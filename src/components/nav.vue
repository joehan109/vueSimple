<template>
  <div id="nav" :class="className">
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
      className: 'nav'
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  mounted () {
    const top = this.$el.offsetTop
    const footerHeight = parseInt(window.getComputedStyle(this.$parent.$refs['footer'].$el).height)

    window.onscroll = this.$lodash.throttle((e) => {
      const scrollTop = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop
          || 0;
      if (scrollTop >= top) {
        this.className = 'nav stickyTop'
        // this.$el.style.position = 'sticky'
        // this.$el.style.top = 0
        this.$el.style.height = document.documentElement.clientHeight - footerHeight + 'px'
      } else {
        this.className = 'nav releaseSticky'
      }
    }, 20).bind(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$headerAndFooter : $footerHeight + $headerHeight;
.nav{
  @include qCalc(height, "100% - " + $headerAndFooter);
  width: 100px;
  color: $themeFontColor;
  background-color: $themeBackgroundColor;
  overflow-y: scroll;
  position: fixed;
  top: $headerHeight;
}
.stickyTop{
  top: 0;
  position: sticky;
}
.releaseSticky{
  position: static;
}
</style>
