---
title: 手风琴 collapse
---
## collapse

使用方法

<ClientOnly>
  <collapse-demos/>
</ClientOnly>


```html 
 <div>
    <g-collapse :selected.sync="selected" single>
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
</div>
```
``` javascript
    data(){
             return {
                 selected:['2'],
             }
         }
```
## collapse-single

使用方法

<ClientOnly>
  <collapse-2-demos/>
</ClientOnly>


``` html
     <div>
         <g-collapse :selected.sync="selectedTab" >
             <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
             <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
             <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
         </g-collapse>
     </div>
```
``` javascript
      data(){
            return {
                selectedTab:['1','2']
            }
        }
```
