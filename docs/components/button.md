---
title: 按钮 Button
pageClass: custom-page-class
---
## 按钮

使用方法

<ClientOnly>
  <button-demos/>
</ClientOnly>


``` 
<div>
    <g-button >默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
</div>
```
## 按钮组合

使用方法


<ClientOnly>
  <button-group-demos/>
</ClientOnly>

``` 
<div>
     <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
     </g-button-group>
 </div>
```