---
title: 网格布局 Grid
---
## Grid

使用方法

<ClientOnly>
  <grid-demos/>
</ClientOnly>


``` html
  <div >
    <g-row>
        <g-col  span="12">
            <div class="item-col">12</div>
        </g-col>
        <g-col span="12">
            <div class="item-col">12</div>
        </g-col>
    </g-row>
    <g-row >
        <g-col span="8"> <div class="item-col">8</div></g-col>
        <g-col span="8"> <div class="item-col">8</div></g-col>
        <g-col span="8"> <div class="item-col">8</div></g-col>
    </g-row>
    <g-row>
        <g-col span="6"> <div class="item-col">6</div></g-col>
        <g-col span="6"> <div class="item-col">6</div></g-col>
        <g-col span="6"> <div class="item-col">6</div></g-col>
        <g-col span="6"> <div class="item-col">6</div></g-col>
    </g-row>
</div>
```
## Grid-gutter 
::: tip
接受gutter样式
:::

使用方法

<ClientOnly>
  <grid-demos-gutter/>
</ClientOnly>

``` html
 <div>
    <g-row gutter="20">
        <g-col  span="12">
            <div class="item-col">12</div>
        </g-col>
        <g-col span="12">
            <div class="item-col">12</div>
        </g-col>
    </g-row>
    <g-row gutter="20">
        <g-col span="8"> <div class="item-col">8</div></g-col>
        <g-col span="8"> <div class="item-col">8</div></g-col>
        <g-col span="8"> <div class="item-col">8</div></g-col>
    </g-row>
    <g-row gutter=20>
        <g-col span="6"> <div class="item-col">6</div></g-col>
        <g-col span="6"> <div class="item-col">6</div></g-col>
        <g-col span="6"> <div class="item-col">6</div></g-col>
        <g-col span="6"> <div class="item-col">6</div></g-col>
    </g-row>
</div>
```
## Grid-offset 
::: tip
接受offset样式
:::

使用方法

<ClientOnly>
  <grid-demos-off/>
</ClientOnly>

``` html
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
```