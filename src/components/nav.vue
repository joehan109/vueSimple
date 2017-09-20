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
      let changedMainWidth = false
      if (scrollTop >= top) {
        this.className = 'nav stickyTop'
        // this.$el.style.position = 'sticky'
        // this.$el.style.top = 0
        this.$el.style.height = document.documentElement.clientHeight - footerHeight + 'px'
      } else {
        this.className = 'nav releaseSticky'
      }
      // 右侧区域去掉由于nav开始fixed设置的margin-left
      if (!changedMainWidth) {
        const contentDOM = this.$parent.$refs['content'].$el;
        if (window.getComputedStyle(contentDOM).position !== 'fixed') {
          contentDOM.style.marginLeft = 0;

          changedMainWidth = true;
        }
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
  width: $navWidth;
  color: $themeFontColor;
  background-color: $themeBackgroundColor;
  overflow-y: scroll;
  // 开始设置fixed防止在nav上滚动触发全局滚动
  position: fixed;
  top: $headerHeight;
}
.stickyTop{
  top: 0;
  position: sticky;
  margin-right: 0;
}
.releaseSticky{
  position: static;
}
</style>
