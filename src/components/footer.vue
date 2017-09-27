<template>
  <div id="footer">
    <h2> {{info.copyRight}} age: {{info.age}} 岁</h2>
  </div>
</template>

<script>
import {mapState,mapActions} from 'Vuex'

export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      info: state => state.footer.footer
    })
  },
  methods:mapActions({
    increment: 'footer/increment'
  }),
  created () {
    this.increment({
      type: 'getUserInfo',
      key: 'age',
      value: '22'
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
  border-top: 1px solid $themeBorderColor;
  background-color: $backGroundColor;
}
</style>
