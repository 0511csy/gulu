<template>
    <div class="popover" @click.stop = "xxx">
        <div class="content-wrapper"  v-if="visible" @click.stop >
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        data(){
            return{
                visible:false
            }
        },
        methods: {
            xxx() {
                console.log(1);
                this.visible = !this.visible
                if (this.visible === true) {
                    setTimeout(() => {
                        let eventHandler = () => {
                            this.visible = false
                            document.removeEventListener('click', eventHandler)
                            }
                        document.addEventListener('click', eventHandler)
                    }, 1000)
                }else{

                }
            }
        }
    }
</script>

<style scoped lang="scss">
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper{
        position: absolute;
        bottom: 100%;
        left: 0;
        border: 1px solid #000;
        box-shadow: 0 0 3px rgba(0,0,0,0.5)
    }
}
</style>