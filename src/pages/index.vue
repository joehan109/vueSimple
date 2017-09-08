<template>
  <div id="container">
    <div>index.vue</div>
    <div>{{data}}</div>
    <router-link :to="{ name: 'Hello', params: {} }">222</router-link>
    <a @click="click">333</a>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      data: this.$store.state.userInfo
    }
  },
  methods: {
    click () {
      this.$store.commit({
        type: 'getUserInfo',
        key: 'age',
        value: 10
      })
    }
  }
}
</script>

<style scoped lang="scss">
#container {
  font-size: 12px;
}
</style>
