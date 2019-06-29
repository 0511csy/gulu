<template>
    <div>
        <g-button @click="$toast('可自动关闭')">demo</g-button>
    </div>
</template>

<script>

    import plugin from '../../../src/plugin'
    import Button from '../../../src/button'
    import Vue from 'vue'
    Vue.use(plugin)

    export default {
        components:{
            'g-button':Button
        }
    }
</script>



