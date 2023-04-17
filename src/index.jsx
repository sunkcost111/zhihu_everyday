import React from 'react'
import ReactDOM from 'react-dom/client'
import 'lib-flexible'
//默认antd-mobile导入
import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'

import './index.less'

import App from './App'
import { Provider } from 'react-redux'
import store from './store/index'
;(function () {
  const handleMax = function handleMax() {
    let html = document.documentElement
    let root = document.getElementById('root')
    let size = parseFloat(html.style.fontSize)
    let deviceW = html.clientWidth
    root.style.maxWidth = '750px'
    if (size >= 75) {
      html.style.fontSize = '75px'
    }
  }
  handleMax()
})()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </>
)
