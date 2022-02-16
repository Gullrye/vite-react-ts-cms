import React, { useState, useCallback, useMemo, useEffect } from 'react'
import logo from '@/assets/img/logo.svg'
import styles from './index.module.less'
import FormattedMsg from '@/components/reactIntl/FormattedMsg'
import { siderMenus, showMenus } from '../schema'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

interface SiderProps {
  location: { pathname: string }
}

const SiderLayout: React.FC<SiderProps> = ({ location: { pathname } }) => {
  const { Sider } = Layout

  // 处理菜单点击
  const curKey = useMemo(() => pathname.slice(1), [pathname])
  const [selectedKey, setSelectedKey] = useState<string>(curKey)
  const onMenuClick = useCallback(({ key }) => setSelectedKey(key), [])

  useEffect(() => setSelectedKey(curKey), [pathname])

  return (
    <Sider className={styles.sider} width={140}>
      <div className={styles.logo}>
        <Link to="/dashboard">
          <img src={logo} alt="logo" width={30} height={30} />
        </Link>
        <span className={styles.title}>
          <FormattedMsg id="CMS" />
        </span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={onMenuClick}
      >
        {showMenus(siderMenus)}
      </Menu>
    </Sider>
  )
}

export default SiderLayout
