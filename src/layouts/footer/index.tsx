import { Layout } from 'antd'
import React from 'react'
import styles from './index.module.less'

const { Footer } = Layout
const FooterLayout: React.FC = () => {
  return (
    <Footer className={styles.footer}>
      <a href="#" target="_blank" rel="noreferrer">
        底部 IP 地址
      </a>
    </Footer>
  )
}

export default FooterLayout
