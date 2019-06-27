---
title: 网页布局 layout
---
## layout

使用方法

<ClientOnly>
  <layout-demos/>
</ClientOnly>


``` 
 <div class="demo">
     <g-layout style="height:50vh;">
         <g-sider >sider</g-sider>
             <g-layout>
                 <g-header >header</g-header>
                 <g-content >content</g-content>
                 <g-footer >footer</g-footer>
             </g-layout>
     </g-layout>
 </div>
```
## layout-demo

使用方法

<ClientOnly>
  <layout-2-demos/>
</ClientOnly>


``` 
 <div class="demo">
     <g-layout style="height:50vh;">
         <g-header>header</g-header>
         <g-layout>
             <g-sider>sider</g-sider>
             <g-content>content</g-content>
             <g-sider>sider</g-sider>
         </g-layout>
         <g-footer>footer</g-footer>
     </g-layout>
 </div>
```
## layout-demo

使用方法

<ClientOnly>
  <layout-3-demos/>
</ClientOnly>


``` 
  <div class="demo">
         <g-layout style="height:50vh;">
             <g-sider>sider</g-sider>
             <g-content>content</g-content>
             <g-layout>
                 <g-header>header</g-header>
                 <g-content>content</g-content>
             </g-layout>
         </g-layout>
   </div>
```