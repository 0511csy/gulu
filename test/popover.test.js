const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('可以接受position', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
         <g-popover position="top"  ref="a">
            <template slot="content">
                弹出内容
            </template>
            <button>点我</button>
            </g-popover >
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-top')).to.be.true
            done()
        })
    })
    // it('可以接受trigger', (done) => {
    //     Vue.component('g-popover', Popover)
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     div.innerHTML = `
    //      <g-popover trigger="hover"  ref="a">
    //         <template slot="content">
    //             弹出内容
    //         </template>
    //         <button>点我</button>
    //         </g-popover >
    //     `
    //     const vm = new Vue({
    //         el: div
    //     })
    //
    // })

})