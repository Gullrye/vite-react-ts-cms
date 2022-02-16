import React, { useCallback, useEffect, useMemo } from 'react'
import { Menu, Dropdown, Avatar, Button, Spin } from 'antd'
import {
  SettingOutlined,
  LogoutOutlined,
  GlobalOutlined
} from '@ant-design/icons'
import avatar from '@/assets/img/avatar.svg'
import styles from './index.module.less'
// hox
import useUserModel from '@/models/user'
import FormattedMsg from '@/components/reactIntl/FormattedMsg'
import { useHistory } from 'react-router'

const RightContent: React.FC = () => {
  const history = useHistory()
  const user = useUserModel()
  useEffect(() => {
    user.getUserInfoData()
  }, [])
  const lang = user.lang
  const onMenuClick = useCallback(({ key }) => {
    switch (key) {
      case 'logout':
        history.push('/login')
        break
      case 'settings':
        history.push('/modify')
        break
      case 'zh-cn':
        user.setLang('zh-cn')
        break
      case 'en':
        user.setLang('en')
        break
    }
  }, [])

  const actionsMenu = useMemo(
    () => (
      <Menu onClick={onMenuClick}>
        <Menu.Item key="settings">
          <SettingOutlined style={{ marginRight: 5 }} />
          <FormattedMsg id="Personal Settings" />
        </Menu.Item>
        <Menu.Item key="logout">
          <LogoutOutlined style={{ marginRight: 5 }} />
          <FormattedMsg id="Log out" />
        </Menu.Item>
      </Menu>
    ),
    []
  )
  const langMenu = useMemo(
    () => (
      <Menu selectedKeys={[lang]} onClick={onMenuClick}>
        <Menu.Item key="en">
          <span className={styles.lang}>US</span>
          English
        </Menu.Item>
        <Menu.Item key="zh-cn">
          <span className={styles.lang}>CN</span>
          简体中文
        </Menu.Item>
      </Menu>
    ),
    [lang]
  )

  return (
    <div className={styles.rightContent}>
      {user.userInfo && user.userInfo.username ? (
        <Dropdown
          overlayClassName={styles.overlay}
          overlay={actionsMenu}
          // trigger={['click']}
          placement="bottomCenter"
          arrow
        >
          <Button type="primary" className={styles.currentUser}>
            <Avatar
              size="small"
              className={styles.avatar}
              src={user.userInfo?.tx || avatar}
              alt="avatar"
            />
            <span>{user.userInfo.username}</span>
          </Button>
        </Dropdown>
      ) : (
        <Spin size="small" style={{ marginRight: 10 }} />
      )}
      <Dropdown
        overlayClassName={styles.overlay}
        overlay={langMenu}
        placement="bottomCenter"
        arrow
      >
        <Button type="primary" danger>
          <GlobalOutlined style={{ cursor: 'pointer' }}></GlobalOutlined>
        </Button>
      </Dropdown>
    </div>
  )
}

export default RightContent
