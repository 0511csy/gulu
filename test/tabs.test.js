const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    it('接受 selected prop', (done) => {
      const div = document.createElement('div')
        div.innerHTML=`
        <g-tabs selected="selected" >
        <g-tabs-head>
            <g-tabs-item name="woman" ></g-icon>美女</g-tabs-item>
            <g-tabs-item name="finance">财经</g-tabs-item>
            <g-tabs-item name="sports">体育</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
            <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
            <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
        `
        let vm = new Vue({
            el:div
        })
        setTimeout(()=>{
            done()
        },1000)
    })

    // const Constructor = Vue.extend(Tab)
    // const vm = new Constructor({
    //     props: {
    //         icon: 'settings'
    //     }
    // }).$mount()
    // const useElement = vm.$el.querySelector('use')
    // expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    // vm.$destroy()


})