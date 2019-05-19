<template>
    <div class="popover" @click = "onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper"  v-if="visible"  >
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block">
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
                if(this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))){return}
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
    $border-color: #333;
    $border-radius: 4px;
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;

}
.content-wrapper{
    position: absolute;
    left: 0;
    border: 1px solid $border-color;
    filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    transform:translateY(-100%);
    background: #ffffff;
    border-radius: $border-radius;
    margin-top: -10px;
    padding: .5em 1em;
    word-break:break-all;
    max-width: 20em;
    &::before,&::after {
        content:'';
        display: block;
        border: 10px solid transparent;
        border-top-color: #000;
        position: absolute;
        width: 0;
        height: 0;
        top: 100%;
        left: 10px;
    }
    &::before{
        border-top-color: #000;
    }
    &::after {
        border-top-color: #ffffff;
        top: calc(100% - 1px);
    }
}
</style>