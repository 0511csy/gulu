<template>
    <div style="overflow:hidden">
        <g-popover position="top">
            <template slot="content" >
                <div>Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容</div>
            </template>
            <g-button>上面弹出</g-button>
        </g-popover>
        <g-popover position="bottom">
            <template slot="content">
                <div>Popover内容</div>
            </template>
            <g-button>下面弹出</g-button>
        </g-popover>
        <g-popover position="left">
            <template slot="content">
                <div>Popover内容</div>
            </template>
            <g-button>左边弹出</g-button>
        </g-popover>
        <g-popover position="right">
            <template slot="content">
                <div>Popover内容</div>
            </template>
            <g-button>右边弹出</g-button>
        </g-popover>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import Popover from '../../../src/popover'

    export default {
        components: {
            'g-popover': Popover,
            'g-button': Button,
        },


    }
</script>
<style lang="scss" scoped>


</style>



