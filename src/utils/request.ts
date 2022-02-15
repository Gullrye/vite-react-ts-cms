import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 5000
})

http.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      return res.data.msg
    }
    return res.data.result
  },
  err => {
    console.log(err)
  }
)

export default http
