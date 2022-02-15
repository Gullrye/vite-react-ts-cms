import React from 'react'
import { Layout } from 'antd'
import RightContent from './rightContent'
import styles from './index.module.less'

const { Header } = Layout

const HeaderLayout: React.FC = () => {
  return (
    <Header className={styles.header}>
      <RightContent />
    </Header>
  )
}

export default HeaderLayout
