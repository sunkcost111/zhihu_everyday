技术栈
React 18 CRA redux/react-redux
React-router-dom fetch  AntdMobile Less
本项目未使用Ts

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
  pm2 start server.js 持久化管理我们的状态   基于pm2持久化管理我们的服务
脚手架
   配置less 配置跨域 配置后端 配置别名 配置移动端rem响应式的处理（lib-flexible , postcss-pxtorem) 配置打包优化处理