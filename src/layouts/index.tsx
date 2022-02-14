import React from 'react'
import { renderRoutes } from 'react-router-config'

const Layouts: React.FC<any> = props => {
  const { route } = props
  return (
    <div>
      <h1>Layouts</h1>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Layouts
