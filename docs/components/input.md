---
title: 输入框 Input
---
## 输入框

使用方法

<ClientOnly>
  <input-demos/>
</ClientOnly>


``` html
 <div>
    <g-input value="张三"></g-input>
    <g-input value="李四" :disabled="true"></g-input>
    <g-input value="李四" :readonly="true"></g-input>
    <g-input value="王" error="姓名不能少于2个字"></g-input>
    <g-input v-model="message"></g-input>
 </div>
```
