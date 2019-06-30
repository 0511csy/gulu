---
title: 弹出层 Popover
---
## Popover-position

使用方法

<ClientOnly>
  <popover-demos/>
</ClientOnly>


``` 
    <div style="overflow:hidden">
        <g-popover position="top">
            <template slot="content" >
                <div>Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容</div>
            </template>
            <g-button>上面弹出</g-button>
        </g-popover>
        <g-popover position="bottom">
            <template slot="content">
                <div>Popover内容</div>
            </template>
            <g-button>下面弹出</g-button>
        </g-popover>
        <g-popover position="left">
            <template slot="content">
                <div>Popover内容</div>
            </template>
            <g-button>左边弹出</g-button>
        </g-popover>
        <g-popover position="right">
            <template slot="content">
                <div>Popover内容</div>
            </template>
            <g-button>右边弹出</g-button>
        </g-popover>
    </div>
```
## Popover-mouseEnter,mouseLeave

使用方法

<ClientOnly>
  <popover-2-demos/>
</ClientOnly>


``` 
    <div style="overflow:hidden;">
      <g-popover position="top" trigger="hover">
          <template slot="content">
              <div>Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容</div>
          </template>
          <g-button>上面悬浮</g-button>
      </g-popover>
      <g-popover position="bottom" trigger="hover">
          <template slot="content">
              <div>Popover内容</div>
          </template>
          <g-button>下面悬浮</g-button>
      </g-popover>
      <g-popover position="left" trigger="hover">
          <template slot="content">
              <div>Popover内容</div>
          </template>
          <g-button>左边悬浮</g-button>
      </g-popover>
      <g-popover position="right" trigger="hover">
          <template slot="content">
              <div>Popover内容</div>
          </template>
          <g-button>右边悬浮</g-button>
      </g-popover>
  </div>
```
## Popover-close

使用方法

<ClientOnly>
  <popover-3-demos/>
</ClientOnly>


    ``` 
    <div style="overflow:hidden">
       <g-popover position="top">
           <template slot="content" slot-scope="{close}">
               <div>Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容Popover内容</div>
               <g-button @click="close">关闭</g-button>
           </template>
           <g-button>可以关闭浮层</g-button>
       </g-popover>
    </div>
    ```