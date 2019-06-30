<template>
    <div style="overflow:hidden">
        <g-popover position="top">
            <template slot="content" slot-scope="{close}">
                <div>Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容</div>
                <g-button @click="close">关闭</g-button>
            </template>
            <g-button>可以关闭浮层</g-button>
        </g-popover>
    </div>
</template>
<script>
    import Button from '../../../src/Button'
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



