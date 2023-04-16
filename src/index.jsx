import React from 'react'
import ReactDOM from 'react-dom/client'
import 'lib-flexible'
import './index.less'
import './assets/reset.min.css'

(function () {
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
  window.addEventListener('resize', handleMax)
})()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <div className="box">珠峰培训</div>
  </>
)
