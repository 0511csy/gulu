<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.prototype.$toast= function () {
        console.log('我是toast')
    }
    export default {
        name: "GuluToast"
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height:20px;
    $toast-bg:rgba(0,0,0,0.75);
    $line-height:1.8;
    .toast{
        position: fixed;
        top: 0;
        left: 50%;
        transform:translateX(-50%);
        font-size:  $font-size;
        height:$toast-height;
        color:white;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.75);
        padding:0 16px;
        background: $toast-bg;
    }
</style>