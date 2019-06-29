---
title: 提示框 Toast
---
## 提示框-autoClose

使用方法

<ClientOnly>
  <toast-demos/>
</ClientOnly>


``` 
 <div>
     <g-button @click="$toast('可自动关闭')">demo</g-button>
 </div>
```
## 提示框-text

使用方法

<ClientOnly>
  <toast-2-demos/>
</ClientOnly>


``` 
   <div>
     <g-button @click="showToast1">top</g-button>
     <g-button @click="showToast2">middle</g-button>
     <g-button @click="showToast3">bottom</g-button>
 </div>
```
``` 
  methods:{
      showToast1(){
          this.showToast('top')
      },
      showToast2(){
          this.showToast('middle')
      },
      showToast3(){
          this.showToast('bottom')
      },
      showToast(position){
          this.$toast(`你的当前智商为 ${parseInt(Math.random() * 100)},你的智商需要充值`,{
              position,
              enableHtml:false,
              closeButton:{
                  text:'已充值',
                  callback(){
                      console.log('他说他已经充值了')
                  },
                  autoClose:3

              }
          })
      }
  }
```
## 提示框-position

使用方法

<ClientOnly>
  <toast-3-demos/>
</ClientOnly>


``` 
  <div>
     <g-button @click="$toast('上方弹出',{position:'top'})">上方弹出</g-button>
     <g-button @click="$toast('中间弹出',{position:'middle'})">中间弹出</g-button>
     <g-button @click="$toast('下方弹出',{position:'bottom'})">下方弹出</g-button>
 </div>
```
## 提示框-enableHtml

使用方法

<ClientOnly>
  <toast-4-demos/>
</ClientOnly>


``` 
  <div>
      <g-button @click="$toast('<h1>hi</h1>',{enableHtml:true})">hi</g-button>
  </div>
```