<template>
    <div>
        <g-button @click="showToast1">top</g-button>
        <g-button @click="showToast2">middle</g-button>
        <g-button @click="showToast3">bottom</g-button>
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
        },

        methods:{
            showToast1(){
                this.showToast('top')
            },
            showToast2(){
                this.showToast('middle')
            },
            showToast3(){
                this.showToast('bottom')
            },
            showToast(position){
                this.$toast(`你的当前智商为 ${parseInt(Math.random() * 100)},你的智商需要充值`,{
                    position,
                    enableHtml:false,
                    closeButton:{
                        text:'已充值',
                        callback(){
                            console.log('他说他已经充值了')
                        },
                        autoClose:3

                    }
                })
            }
        }

    }
</script>



