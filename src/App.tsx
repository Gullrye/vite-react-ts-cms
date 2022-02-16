import React from 'react'
import 'antd/dist/antd.css' // antd 样式放前边，防止自定义样式无效
import './App.less'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router'

function App() {
  return <HashRouter>{renderRoutes(routes)}</HashRouter>
}

export default App
