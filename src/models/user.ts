import { useState } from 'react'
import { createModel } from 'hox'
import { getUserInfo } from '@/api/user'

export interface CurrentUser {
  tx: string
  username: string
  email: string
  desc: string
  country: string
  addr: string
  phone: string
}

function useUser() {
  // 用户信息
  const [userInfo, setUserInfo] = useState({} as CurrentUser)
  const getUserInfoData = async () => {
    const data = await getUserInfo()
    setUserInfo(data)
  }

  // 语言切换设置
  const [lang, setLang] = useState('zh-cn')
  // const triggerLang = (lang: string) => {
  //   setLang(lang)
  // }
  return {
    userInfo,
    getUserInfoData,

    lang,
    setLang
  }
}

export default createModel(useUser)
