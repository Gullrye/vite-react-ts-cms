import React from 'react'
import './App.less'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router'

function App() {
  return <HashRouter>{renderRoutes(routes)}</HashRouter>
}

export default App
