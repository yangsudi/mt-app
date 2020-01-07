import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response
}, error => {
  return Promise.reject(error)
})

export function request (baseURL = '', method = '', url = '', contentType = 'application/json;charset=utf-8', responseType = '', params = {}, data = {}, timeout = 2000) {
  return new Promise((resolve, reject) => {
    let headers = {
      'Content-Type': contentType
    }
    axios({
      headers,
      baseURL,
      url,
      params,
      data,
      timeout,
      method,
      responseType
    }).then((response) => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
