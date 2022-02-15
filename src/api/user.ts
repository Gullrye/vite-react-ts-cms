import http from '@/utils/request'
import { CurrentUser } from '@/models/user'

export const getUserInfo: () => Promise<any> = () => {
  return http.get('/setting/userInfo/get')
}
