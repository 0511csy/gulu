<template>
    <div class="popover" @click = "onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper"  v-if="visible"
        :class="{[`position-${position}`]:true}">
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
        props:{
            position:{
                type: String,
                default: 'top',
                validator(value){
                   return ['left','top','right','bottom'].indexOf(value) >= -1
                }
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
                const {contentWrapper,triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                let{width,height,top,left} = triggerWrapper.getBoundingClientRect()
                if(this.position === 'top'){
                    contentWrapper.style.left = left +window.scrollX+ 'px'
                    contentWrapper.style.top = top + window.scrollY + 'px'
                }else if(this.position === 'bottom'){
                    contentWrapper.style.left = left +window.scrollX+ 'px'
                    contentWrapper.style.top = top + height+ window.scrollY + 'px'
                }else if(this.position === 'left'){
                    let {height:height2} = contentWrapper.getBoundingClientRect()
                    contentWrapper.style.left = left +window.scrollX+ 'px'
                    contentWrapper.style.top = top + (height -height2)/2 +
                        window.scrollY + 'px'
                }else if(this.position === 'right'){
                    let {height:height2} = contentWrapper.getBoundingClientRect()
                    contentWrapper.style.left = left + width + window.scrollX+ 'px'
                    contentWrapper.style.top = top + (height -height2)/2 +
                        window.scrollY + 'px'
                }
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
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: #ffffff;
    padding: .5em 1em;
    word-break:break-all;
    max-width: 20em;
    &::before,&::after {
        content:'';
        display: block;
        border: 10px solid transparent;
        position: absolute;
        width: 0;
        height: 0;
    }
    &.position-top {
        margin-top: -10px;
        transform:translateY(-100%);
        &::before,&::after {
            left: 10px;
        }
        &::before{
            border-top-color: #000;
            top: 100%;
        }
        &::after {
            border-top-color: #ffffff;
            top: calc(100% - 1px);
        }
    }
    &.position-bottom {
        margin-top: 10px;
        &::before,&::after {
            left: 10px;
        }
        &::before{
            border-bottom-color: #000;
            bottom: 100%;
        }
        &::after {
            border-bottom-color: #ffffff;
            bottom: calc(100% - 1px);
        }
    }
    &.position-left {
        margin-left: -10px;
        transform:translateX(-100%);
        &::before,&::after {
            transform:translateY(-50%);
            top: 50%;
        }
        &::before{
            border-left-color: #000;
            left: 100%;
        }
        &::after {
            border-left-color: #ffffff;
            left: calc(100% - 1px);
        }
    }
    &.position-right {
        margin-left: 10px;
        &::before,&::after {
            transform:translateY(-50%);
            top: 50%;
        }
        &::before{
            border-right-color: #000;
            right: 100%;
        }
        &::after {
            border-right-color: #ffffff;
            right: calc(100% - 1px);
        }
    }
}
</style>