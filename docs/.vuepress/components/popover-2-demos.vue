<template>
        <div style="overflow:hidden;">
            <g-popover position="top" trigger="hover">
                <template slot="content">
                    <div>Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容</div>
                </template>
                <g-button>上面悬浮</g-button>
            </g-popover>
            <g-popover position="bottom" trigger="hover">
                <template slot="content">
                    <div>Popover内容</div>
                </template>
                <g-button>下面悬浮</g-button>
            </g-popover>
            <g-popover position="left" trigger="hover">
                <template slot="content">
                    <div>Popover内容</div>
                </template>
                <g-button>左边悬浮</g-button>
            </g-popover>
            <g-popover position="right" trigger="hover">
                <template slot="content">
                    <div>Popover内容</div>
                </template>
                <g-button>右边悬浮</g-button>
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



