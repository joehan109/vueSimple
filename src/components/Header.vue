<template>
  <div id="header">
    <h2>{{userInfo.name}}</h2>
    <h2>age: {{userInfo.age}} 岁</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
        key: 'name',
        value: response.data.aa
      })
    }, e => {
      console.log(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
