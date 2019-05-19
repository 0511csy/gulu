<template>
    <div class="popover" @click = "onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper"  v-if="visible"  >
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>

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
            onclickDocument (e) {
                if(this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))){return}
                this.close()
            },
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                let{width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left +window.scrollX+ 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            open(){
                this.visible = true
                this.$nextTick(()=>{
                    this.positionContent()
                   document.addEventListener('click',this.onclickDocument)
                })
            },
            close(){
                this.visible = false
                document.removeEventListener('click', this.onclickDocument)
            },
            onClick(event) {
               if(this.$refs.triggerWrapper.contains(event.target)){
                   if (this.visible === true) {
                          this.close()
                       }else{
                       this.open()
                   }
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

}
.content-wrapper{
    position: absolute;
    left: 0;
    border: 1px solid #000;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform:translateY(-100%);
}
</style>