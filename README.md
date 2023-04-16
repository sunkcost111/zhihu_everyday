技术栈
React 18 CRA redux/react-redux
React-router-dom fetch AntdMobile Less
本项目未使用 Ts

知乎日报后台
zhihu-admin
后端的数据接口分为两个部分
知乎官方接口
自己封装的个人中心 登录注册，发送验证码，个人中心，个人信息，收藏体系
后端技术栈
node + express
数据存储 json(未采取数据库存储 mysql mongodb)

启动后端
node server.js
或者
pm2 start server.js 持久化管理我们的状态 基于 pm2 持久化管理我们的服务
脚手架
配置 less 配置跨域 配置后端 配置别名 配置移动端 rem 响应式的处理（lib-flexible , postcss-pxtorem) 配置打包优化处理

lib-flexible 用来设置 rem 和 px 换算比例

- 根据设备宽度自动变化
- html.style.fontSize=设备的宽度/10+'px'
- 375 设备上 1rem=37.5px
- 750 设计稿中，1rem=75px:初始换算比例
  postcss-pxtorem 可以把我们写的 px 单位，按照我们的换算比例，自动转换为 rem，不需要我们自己算

---

@1 假设设计稿还是 750px 的，我们测出来多少尺寸，我么写样式的时候，就写多少尺寸，并且不需要手动转换为 rem【我们在 webpack 中，设置该插件，让插件帮我们手动配置】
  const px2rem = require('postcss-pxtorem')
  px2rem({
  rootValue: 75, // 基于 lib-flexible,750 设计稿，就会设置 1rem=75px,此时再 webpack 编译时，我们需要让 px2rem插件，按照1rem=75px，把我们测出来的并且编写的px样式，自动转换为rem
  propList: ['*'], //对所有文件的样式都生效（包括antdmobile）组件库
  }),
@2 在入口中，我们导入lib-flexible，确保在不同该设备中，可以等比例的堆rem的换算进行缩放
@3 手动设置设备宽度超过750px后，就不再继续放大
