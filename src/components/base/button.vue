<script>
    export default {
        name:'basebutton',
        render(h) {
            return h('el-button',
                {
                    class: ['button']
                }, [this.$slots.default, h('h1', '一则头条')])
        },
        props:[]
    }
</script>
<style scoped>
    .button {
        display: inline-block;
        padding: 0.5em 1em;
        cursor: pointer;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #333;
        background-color: #fff;
        border-color: #ccc;
    }
    .button.dark {
        background-color: black;
        color: white;
    }
    .button.light {
        background-color: white;
        color: black;
        border: solid 1px black;
    }
</style>
