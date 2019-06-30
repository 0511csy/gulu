---
title: 标签 Tabs
---
## Tabs

使用方法

<ClientOnly>
  <tabs-demos/>
</ClientOnly>


``` 
<div>
    <g-tabs :selected="selected">
        <g-tabs-head>
            <template slot="actions">
                <g-button>设置</g-button>
            </template>
            <g-tabs-item name="woman" >
                <g-icon name="settings"></g-icon>美女
            </g-tabs-item>
            <g-tabs-item name="finance">财经</g-tabs-item>
            <g-tabs-item name="sports">体育</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
            <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
            <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
</div>
```
