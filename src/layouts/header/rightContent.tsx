import React, { useEffect, useMemo } from 'react'
import { Menu, Dropdown, Avatar } from 'antd'
import {
  SettingOutlined,
  LogoutOutlined,
  GlobalOutlined
} from '@ant-design/icons'
import avatar from '@/assets/img/avatar.svg'
import styles from './index.module.less'
import { CurrentUser } from '@/models/user'
// hox
import useUserModel from '@/models/user'
import FormattedMsg from '@/components/reactIntl/FormattedMsg'

// interface RightContentProps {}

const RightContent: React.FC = () => {
  const user = useUserModel()
  useEffect(() => {
    user.getUserInfoData()
  }, [])
  console.log(user.userInfo)

  const menu = useMemo(
    () => (
      <Menu>
        <Menu.Item key="settings">
          <SettingOutlined />
          <FormattedMsg id="Personal Settings" />
        </Menu.Item>
        <Menu.Item key="logout">
          <LogoutOutlined />
          <FormattedMsg id="Log out" />
        </Menu.Item>
      </Menu>
    ),
    []
  )

  return (
    <div>
      <Dropdown
        overlayClassName={styles.overlay}
        overlay={menu}
        // trigger={['click']}
        placement="bottomCenter"
      >
        <span className={styles.currentUser}>
          <Avatar
            size="small"
            className={styles.avatar}
            src={user.userInfo?.tx || avatar}
            alt="avatar"
          />
          <span>{}</span>
        </span>
      </Dropdown>
    </div>
  )
}

export default RightContent
