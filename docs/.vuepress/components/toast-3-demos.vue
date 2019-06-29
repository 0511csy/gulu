<template>
    <div>
        <g-button @click="$toast('上方弹出',{position:'top'})">上方弹出</g-button>
        <g-button @click="$toast('中间弹出',{position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('下方弹出',{position:'bottom'})">下方弹出</g-button>
    </div>
</template>

<script>

    import plugin from '../../../src/plugin'
    import Button from '../../../src/button'
    import Vue from 'vue'
    Vue.use(plugin)

    export default {
        components: {
            'g-button': Button
        }
    }
</script>



