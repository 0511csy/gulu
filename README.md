# 一个Vue组件
## 介绍
这是我在学习Vue过程中做的框架

## 开始使用

1. 添加css样式
    使用本框架前，请在css中开启 border-box
    ```
    *,*::{box-sizing:border-box;}

    ```
    IE 8 及以上都支持

    你还需要设置默认颜色等变量（后续改为 Scss 变量）
    ```
      html{
                --button-height:32px;
                --font-size:14px;
                --button-bg:white;
                --button-active-bg: #eee;
                --border-radius: 4px;
                --color: #333;
                --border-color: #999;
                --border-color-hover: #666;
            }
    ```
    IE 15 及以上都支持

2. 安装gulu
    ```
    npm i --save gulululululu
    ```
3. 引入 gulu
```
    import {Button, ButtonGrouop, Icon} from 'gulululululu'
    import 'gulululululu/dist/index.css'
    
    export default {
        name:'app',
        components:{
            HelloWorld,
            'g-button':Button,
            'g-icon':Icon
        }
    }
```
4. 引入 svg symbols
```
    <srcrpt src="//at.alicdn.com/t/font_1169280_74nh3ue91j7.js"></script>
```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码
