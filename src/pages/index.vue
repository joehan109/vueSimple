<template>
  <div id="container">
    <div>index.vue</div>
    <div>{{data}}</div>
    <router-link :to="{ name: 'Hello', params: {} }">222</router-link>
    <a @click="click">333</a>
    <input v-model='t1' type="text" />
    <a @click="search">search</a>
    <table>
      <th><td>城市</td><td>{{myData.city}}</td></th>
      <th><td>pm2.5</td><td>{{myData.pm25}}</td></th>
      <tr v-for="item in myData.weather">
        <td>{{item.date}}</td><td>{{item.weather}}</td>
      </tr>
    </table>
    <table>
      <th><td>城市</td><td>{{myData.city}}</td></th>
      <th><td>pm2.5</td><td>{{myData.pm25}}</td></th>
      <tr v-for="item in myData.weather">
        <td>{{item.date}}</td><td>{{item.weather}}</td>
      </tr>
    </table>
    <table>
      <th><td>城市</td><td>{{myData.city}}</td></th>
      <th><td>pm2.5</td><td>{{myData.pm25}}</td></th>
      <tr v-for="item in myData.weather">
        <td>{{item.date}}</td><td>{{item.weather}}</td>
      </tr>
    </table>
    <table>
      <th><td>城市</td><td>{{myData.city}}</td></th>
      <th><td>pm2.5</td><td>{{myData.pm25}}</td></th>
      <tr v-for="item in myData.weather">
        <td>{{item.date}}</td><td>{{item.weather}}</td>
      </tr>
    </table>
    <table>
      <th><td>城市</td><td>{{myData.city}}</td></th>
      <th><td>pm2.5</td><td>{{myData.pm25}}</td></th>
      <tr v-for="item in myData.weather">
        <td>{{item.date}}</td><td>{{item.weather}}</td>
      </tr>
    </table>
    <table>
      <th><td>城市</td><td>{{myData.city}}</td></th>
      <th><td>pm2.5</td><td>{{myData.pm25}}</td></th>
      <tr v-for="item in myData.weather">
        <td>{{item.date}}</td><td>{{item.weather}}</td>
      </tr>
    </table>
    <table>
      <th><td>城市</td><td>{{myData.city}}</td></th>
      <th><td>pm2.5</td><td>{{myData.pm25}}</td></th>
      <tr v-for="item in myData.weather">
        <td>{{item.date}}</td><td>{{item.weather}}</td>
      </tr>
    </table>
    <table>
      <th><td>城市</td><td>{{myData.city}}</td></th>
      <th><td>pm2.5</td><td>{{myData.pm25}}</td></th>
      <tr v-for="item in myData.weather">
        <td>{{item.date}}</td><td>{{item.weather}}</td>
      </tr>
    </table>
    <table>
      <th><td>城市</td><td>{{myData.city}}</td></th>
      <th><td>pm2.5</td><td>{{myData.pm25}}</td></th>
      <tr v-for="item in myData.weather">
        <td>{{item.date}}</td><td>{{item.weather}}</td>
      </tr>
    </table>
    {{myData.pm25}}
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      data: this.$store.state.userInfo,
      t1:'',
      myData: ''
    }
  },
  methods: {
    async click () {
      this.$store.commit({
        type: 'getUserInfo',
        key: 'age',
        value: 10
      })
      console.log(11)
      await this.loading(2000)
      await this.$http.get('/api/a.json').then(res => console.log(22))
      await this.loading(2000)
      this.$http.get('/api/a.json').then(res => console.log(222))
      console.log(333)
      console.log(444)
      await this.loading(10)
      console.log(555)
    },
    loading (time) {
      return new this.$promise((res,rej) => {
        setTimeout(()=>{
          res();
        },time)
      })
    },
    search () {
      this.$http.jsonp("https://api.asilu.com/weather/"+this.$utils.getParams({city:this.t1}), {
      },(err, res) => {
          this.myData = res
      });

    }
  },
  created () {


  }
}
</script>

<style scoped lang="scss">
#container {
  font-size: 12px;
}
</style>
