<template>
    <div>
        <g-input value="张三"></g-input>
        <g-input value="李四" :disabled="true"></g-input>
        <g-input value="李四" :readonly="true"></g-input>
        <div style="margin-top: 20px">
            <g-input value="王" error="姓名不能少于2个字"></g-input>
        </div>
        <div style="margin-top: 20px">
            <g-input v-model="message"></g-input>
        </div>



    </div>
</template>

<script>
    import Input from '../../../src/input'

    export default {
        components:{
          'g-input':Input,
        },

        data(){
            return{
                message:'请输入文本'
            }
        }
    }
</script>
<style lang="scss" scoped>



</style>



