<template>
    <div>
        <div>
            <g-row gutter="20">
                <g-col  span="12">
                    <div class="item-col">12</div>
                </g-col>
                <g-col span="11" offset="1">
                    <div class="item-col">12</div>
                </g-col>
            </g-row>
            <g-row gutter="20">
                <g-col span="8"> <div class="item-col">8</div></g-col>
                <g-col span="6" offset="2"> <div class="item-col">8</div></g-col>
                <g-col span="6" offset="2"> <div class="item-col">8</div></g-col>
            </g-row>
            <g-row gutter=20>
                <g-col span="6"> <div class="item-col">6</div></g-col>
                <g-col span="5" offset="1"> <div class="item-col">6</div></g-col>
                <g-col span="4" offset="2"> <div class="item-col">6</div></g-col>
                <g-col span="3" offset="3"> <div class="item-col">6</div></g-col>
            </g-row>
        </div>
    </div>
</template>

<script>
    import Col from '../../../src/col'
    import Row from '../../../src/row'

    export default {
        components:{
          'g-col': Col,
          'g-row': Row
        },


    }
</script>
<style lang="scss" scoped>
    .item-col{
        height: 40px;
        background: #3eaf7c;
    }
   .col:nth-child(even){
       .item-col{
           background: #328d64;
       }
   }
    .row{
        margin: 5px 0;
        flex-wrap: nowrap;
    }


</style>



