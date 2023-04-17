import React, { Suspense } from 'react'
import routes from './routes'
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { Mask, DotLoading } from 'antd-mobile'

//获取路由信息，我们需要的钩子hook
//统一路由配置
const Element = function Element(props) {
  let { component: Component, meta } = props
  //修改页面的的title
  let { title = '知乎日报-WebApp' } = meta || {}
  document.title = title
  let navigate = useNavigate()
  let location = useLocation()
  let params = useParams()
  let [usp] = useSearchParams()
  //获取路由信息，基于属性传递给组件
  return (
    <Component
      navigate={navigate}
      location={location}
      params={params}
      usp={usp}
    />
  )
}

//在Suspense
export default function RouterView() {
  return (
    <Suspense
      fallback={
        <Mask visible={true} opacity="thick">
          <DotLoading color="white" />
        </Mask>
      }
    >
      <Routes>
        {routes.map((item, index) => {
          let { path, name } = item
          return (
            <Route key={name} path={path} element={<Element {...item} />} />
          )
        })}
      </Routes>
    </Suspense>
  )
}
