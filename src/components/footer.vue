<template>
  <div id="footer">
    <h2>{{userInfo.name}}{{userInfo.name1}}age: {{userInfo.age}} 岁</h2>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  created () {
    this.$http.get('/api/a.json').then(response => {
      console.log(response)
      this.$store.commit({
        type: 'getUserInfo',
        key: 'name1',
        value: response.data.aa
      })
      this.$store.commit({
        type: 'getUserInfo',
        key: 'name1',
        value: response.data.aa
      })
    }, e => {
      console.log(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#footer{
  position: fixed;
  bottom:0;
  width: 100%;
  color:black;
  border-top: 1px solid #666;
  background-color: $backGroundColor;
}
</style>
