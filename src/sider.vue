<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">click</button>
        </div>
    </transition>

</template>

<script>
    export default {
        name: "GuluSider",
        data(){
            return{
                visible:true
            }
        }
    }
</script>

<style lang="scss" scoped>
.sider{
    position:relative;
    >button{
        position: absolute;
        right: 0;
        top: 0;
    }
}
    .slide-enter-active,.slide-leave-active{
        transition: all .3s;
    }
    .slide-enter,.slide-leave-to{
        margin-left: -200px;
    }
</style>