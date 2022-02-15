import React, { useCallback, useMemo } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { ConfigProvider, Layout } from 'antd'
// 引入 antd 的国际化的配置
import antdZhCN from 'antd/lib/locale/zh_CN'
import anatdEnUS from 'antd/lib/locale/en_US'
import { IntlProvider, createIntl, createIntlCache } from 'react-intl'
// 项目中的中英文配置
import zh_CN from '@/locales/zh'
import en_US from '@/locales/en'

import Header from './header'
import Footer from './footer'
import Sider from './sider'
import styles from './index.module.less'
import { IntlContext } from '@/utils/context/intl'

const cache = createIntlCache()

interface BasicLayoutProps {
  children: JSX.Element
  location: any
  lang: string
  route: RouteConfig
}

const BasicLayouts: React.FC<BasicLayoutProps> = ({
  children,
  location,
  // 如果 lang 无默认值，会报错 Error: [@formatjs/intl Error INVALID_CONFIG] "locale" was not configured, using "en" as fallback.
  lang = 'zh-cn',
  route
}) => {
  // 获取对应类型的中文或英文配置
  const getLocale: (lang: string, type: string) => any = useCallback(
    (lang, type) => {
      let language: any = null
      switch (lang) {
        case 'zh-cn':
          language = type === 'antd' ? antdZhCN : zh_CN
          break
        case 'en':
          language = type === 'antd' ? anatdEnUS : en_US
          break
      }
      return language
    },
    []
  )
  const intl = useMemo(
    () =>
      createIntl(
        {
          locale: lang,
          messages: getLocale(lang, 'react-intl')
        },
        cache
      ),
    [lang]
  )

  const formatMsg: (id: string, defaultMsg?: string) => any = useCallback(
    (id, defaultMsg) =>
      intl.formatMessage({
        id,
        defaultMessage: defaultMsg || id
      }),
    [intl.locale]
  )

  return (
    <IntlProvider messages={getLocale(lang, 'react-intl')} locale={lang}>
      <ConfigProvider locale={getLocale(lang, 'antd')}>
        <IntlContext.Provider value={formatMsg}>
          <Layout className={styles.basicLayout}>
            <Sider />
            <Layout className={styles.contentLayout}>
              <Header />
              <Layout.Content className={styles.content}>
                {children}
                {renderRoutes(route.routes)}
              </Layout.Content>
              <Footer />
            </Layout>
          </Layout>
        </IntlContext.Provider>
      </ConfigProvider>
    </IntlProvider>
  )
}

export default BasicLayouts
