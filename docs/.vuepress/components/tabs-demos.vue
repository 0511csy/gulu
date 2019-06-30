<template>
    <div>
        <g-tabs :selected="selected">
            <g-tabs-head>
                <template slot="actions">
                    <g-button>设置</g-button>
                </template>
                <g-tabs-item name="woman" >
                    <g-icon name="settings"></g-icon>美女
                </g-tabs-item>
                <g-tabs-item name="finance">财经</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs'
    import Button from '../../../src/button'
    import Icon from '../../../src/icon'
    import TabsBody from '../../../src/tabs-body'
    import TabsHead from '../../../src/tabs-head'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'

    export default {
        components:{
            'g-tabs':Tabs,
            'g-tabs-body':TabsBody,
            'g-tabs-head':TabsHead,
            'g-tabs-item':TabsItem,
            'g-tabs-pane':TabsPane,
            'g-icon':Icon,
            'g-button':Button,
        },
        data(){
            return{
                selected:'sports'
            }

        },
        methods: {
            yyy() {
                console.log('yyy')
            },
        }
    }
</script>
<style lang="scss" scoped>


</style>



