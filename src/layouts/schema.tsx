import { Menu } from 'antd'
import React from 'react'
import {
  DashboardOutlined,
  ReadOutlined,
  RocketOutlined,
  PayCircleOutlined,
  SettingOutlined
} from '@ant-design/icons'
import FormattedMsg from '@/components/reactIntl/FormattedMsg'
import { Link } from 'react-router-dom'

export const siderMenus: any = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    text: <FormattedMsg id="Dashboard" />,
    path: '/dashboard'
  },
  {
    key: 'article',
    icon: <ReadOutlined />,
    text: <FormattedMsg id="Article" />,
    path: '/article'
  },
  {
    key: 'advert',
    icon: <RocketOutlined />,
    text: <FormattedMsg id="Advertising" />,
    path: '/advert'
  },
  {
    key: 'setting',
    icon: <SettingOutlined />,
    text: <FormattedMsg id="Config" />,
    path: '/setting'
  },
  {
    key: 'payment',
    icon: <PayCircleOutlined />,
    text: <FormattedMsg id="Pay" />,
    path: '/payment'
  }
]

interface siderMenuList {
  key: number
  icon: any
  title: string
  children: []
  text: string
  path: string
}

export function showMenus(menuList: any[]) {
  return menuList.map((menu: siderMenuList) => {
    if (menu.children) {
      return (
        <Menu.SubMenu key={menu.key} icon={menu.icon} title={menu.title}>
          {showMenus(menu.children)}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={menu.key} icon={menu.icon}>
          <Link to={menu.path}>{menu.text}</Link>
        </Menu.Item>
      )
    }
  })
}
