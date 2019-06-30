<template>
    <div class="demo">
        <g-layout style="height:50vh;overflow: hidden;">
            <g-sider>sider</g-sider>
            <g-content>content</g-content>
            <g-layout>
                <g-header>header</g-header>
                <g-content>content</g-content>
            </g-layout>
        </g-layout>
    </div>
</template>

<script>
    import Header from '../../../src/header'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'
    import Sider from '../../../src/sider'
    import Layout from '../../../src/layout'

    export default {
        components:{
          'g-header':Header,
          'g-content':Content,
          'g-footer':Footer,
          'g-sider':Sider,
          'g-layout':Layout
        }

    }
</script>
<style lang="scss" scoped>


    .demo{
        min-height: 100px;
        background: #338b64;
        text-align: center;

        }
    .sider{
        width: 200px;
        background: #4cc5bf;

        }
    .sider.slide-enter,.sider.slide-leave-to{
        margin-left: -150px;
        }
    .header{
        background: #42b481;
        height: 100px;
        }
    .footer{
        background: #42b481;
        height: 50px;
        }
    .content{
        background: #338b64;
    }

</style>



