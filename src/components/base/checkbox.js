import Vue from 'vue'

Vue.component('checkboxList', {
  template: '<div class="custom-checkbox">\
              <label v-if="showAll"><input type="checkbox" @change="checkAll">全选</label>\
              <label v-for="(item, $index) in list" :key="$index">\
                <input \
                  type="checkbox"\
                  :ref="$index+1"\
                  :list=" list "\
                  :code=" code "\
                  :name="name" \
                  :class="className" \
                  :id="id" \
                  :value="item[code]"\
                  :required="required" \
                  @change="updateInput(item, $event)" \> \
                {{ item[name] }}\
              </label>\
            </div>',
  props: {
    name: {
      type: String,
      required: false
    },
    className: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    value: {
      type: Array,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    list: {
      type: Array,
      required: true
    },
    code: {
      type: String
    },
    showAll: {
      type: Boolean
    }
  },
  methods: {
    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
    updateInput: function(item, event) {
      const code = item[this.code]
      if (event.target.checked) {
        this.value.push(code)
      } else {
        this.value.splice(this.value.indexOf(code), 1)
      }
      // this.$emit('input', event.target.checked)
    },
    checkAll: function(event) {
      if (event.target.checked) {
        this.value = []
        this.list.forEach((child) => {
          this.value.push(child[this.code])
        })
      } else {
        this.value = []
      }
    }
  },
  mounted() {
    for (let item in this.$refs) {
      let input = this.$refs[item]
      if (this.value.indexOf(input[0].value) >= 0) {
        input[0].checked = true
      }
    }
  }
})
