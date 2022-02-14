import Layouts from '@/layouts'
import Advert from '@/views/advert'
import Article from '@/views/article'
import Dashboard from '@/views/dashboard'
import Payment from '@/views/payment'
import Release from '@/views/release'
import Setting from '@/views/setting'
import User from '@/views/user'
import NotFound from '@/views/404'
import { RouteConfig } from 'react-router-config'
import { Redirect } from 'react-router-dom'
import React, { ReactNode } from 'react'
import Login from '@/views/login'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layouts,
    routes: [
      {
        path: '/',
        exact: true,
        render: (): ReactNode => (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      },
      { path: '/login', component: Login },
      { path: '/user', component: User },
      { path: '/dashboard', component: Dashboard },
      { path: '/article', component: Article },
      { path: '/draft', component: Article },
      { path: '/release', component: Release },
      { path: '/advert', component: Advert },
      { path: '/payment', component: Payment },
      { path: '/setting', component: Setting },
      // { path: '/modify', component: '@/pages/user/modify' },
      { path: '*', component: NotFound }
    ]
  }
]

export default routes
