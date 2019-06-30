<template>
    <div class="popover"  ref="popover">
        <div ref="contentWrapper" class="gulu-popover-content-wrapper"  v-if="visible"
        :class="[{[`position-${position}`]:true},popClassName]" >
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block">
            <slot></slot>
        </span>

    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        props:{
            popClassName:{
              type: String
            },
            position:{
                type: String,
                default: 'top',
                validator(value){
                    return ['left','top','right','bottom'].indexOf(value) >= 0
                }
            },
            trigger:{
                type: String,
                default: 'click',
                validator(value){
                    return ['click','hover'].indexOf(value) >= 0
                }
            },
            container:{
                type: Element
            }

        },
        data(){
            return{
                visible:false
            }
        },
        mounted(){
            this.addPopoverListeners()
        },
        beforeDestroy(){
            this.putBackContent()
            this.removePopoverListeners()
        },

        computed:{
            openEvent (){
                if(this.trigger === 'click'){
                    return 'click'
                }else{
                    return 'mouseenter'
                }
            },
            closeEvent (){
                if(this.trigger === 'click'){
                    return 'click'
                }else{
                    return 'mouseleave'
                }
            }
        },
        methods: {
            addPopoverListeners(){
                if(this.trigger === 'click'){
                    this.$refs.popover.addEventListener('click',this.onClick)
                }else{
                    this.$refs.popover.addEventListener('mouseenter',this.open)
                    this.$refs.popover.addEventListener('mouseleave',this.close)
                }
             },
            removePopoverListeners(){
                if(this.trigger === 'click'){
                    this.$refs.popover.removeEventListener('click',this.onClick)
                }else{
                    this.$refs.popover.removeListener('mouseenter',this.open)
                    this.$refs.popover.removeListener('mouseleave',this.close)
                }
            },
            putBackContent(){
                const {contentWrapper,popover} = this.$refs
                if(!contentWrapper){return}
                popover.appendChild(contentWrapper)
            },

            positionContent(){

                const {contentWrapper, triggerWrapper} = this.$refs;
                (this.container || document.body).appendChild(contentWrapper)
                const {height:height2} = contentWrapper.getBoundingClientRect()
                const{width,height,top,left} = triggerWrapper.getBoundingClientRect()
                let positions={
                    top:{
                        left:left +window.scrollX,
                        top:top + window.scrollY
                    },
                    bottom:{
                        left:left +window.scrollX,
                        top:top + height+ window.scrollY
                    },
                    left:{
                        left: left +window.scrollX,
                        top:top + (height -height2)/2 + window.scrollY
                    },
                    right:{
                        left:left + width + window.scrollX,
                        top:top + (height -height2)/2 + window.scrollY
                    }
                }
                contentWrapper.style.left = positions[this.position].left + 'px'
                contentWrapper.style.top = positions[this.position].top + 'px'

            },

            onClickDocument (e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) { return }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
                ) { return }
                this.close()
            },
            open () {
                this.visible = true
                this.$emit('open')
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close () {
                this.visible = false
                this.$emit('close')
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick (event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
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
.gulu-popover-content-wrapper{
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
            border-bottom:none;
            top: 100%;
        }
        &::after {
            border-top-color: #ffffff;
            border-bottom:none;
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
            border-top:none;
            bottom: 100%;
        }
        &::after {
            border-bottom-color: #ffffff;
            border-top:none;
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
            border-right:none;
            left: 100%;
        }
        &::after {
            border-left-color: #ffffff;
            border-right:none;
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
            border-left:none;
            right: 100%;
        }
        &::after {
            border-right-color: #ffffff;
            border-left:none;
            right: calc(100% - 1px);
        }
    }
}
</style>