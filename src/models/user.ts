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
  const [userInfo, setUserInfo] = useState({} as CurrentUser)
  const getUserInfoData = async () => {
    const data = await getUserInfo()
    setUserInfo(data)
  }
  return {
    userInfo,
    getUserInfoData
  }
}

export default createModel(useUser)
