<template>
  <div class="hello">
    <div class="search">
      <el-row>
        <el-col :span="3">查询条件1</el-col>
        <el-col :span="16">
          <el-checkbox-group v-model="params.checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">查询条件2</el-col>
        <el-col :span="16">
          <el-checkbox-group v-model="params.checkList">
            <el-checkbox label="复选框"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">查询条件3</el-col>
        <el-col :span="16">
          <checkbox-list
            :list="dataList.checkList"
            code = "id"
            name="name"
            :value="params.checkboxValue"
          ></checkbox-list>{{params.checkboxValue}}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">查询条件4</el-col>
        <el-col :span="16">
          <checkbox-list
            :list="dataList.checkList"
            code = "id"
            name="name"
            :value="params.checkboxValue2"
          ></checkbox-list>{{params.checkboxValue2}}
        </el-col>
      </el-row>

    </div>
    <div>
      <basebutton class="light">
        <router-link :to="{ name: 'Index', params: {} }">222</router-link>
      </basebutton>
      <el-button class="light">button</el-button>
    </div>
  <div>
      <el-table
          :data="tableData4"
          border
          style="width: 100%"
          max-height="250">
          <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            width="120">
            <template scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>

  </div>
</template>

<script>
import {mapState,mapActions} from 'Vuex';
import basebutton from '@/components/base/button.vue';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1',
      params:{
        checkList:['选中且禁用','复选框 A'],
        checkboxValue:["a1"],
        checkboxValue2:["a2"]
      },
      dataList: {
        checkList:[{
          id:"a1",name:'a'
        },{
          id:"a2",name:'b'
        }]
      }
    }
  },
  computed: {
    ...mapState({
      tableData4: state => state.hello.data
    })
  },
  components: {
    basebutton
  },
  created () {console.log(this.state,333)},
  mounted () {
    console.log(this.state,333)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search{
  text-align: left;
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
