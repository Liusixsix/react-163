import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import {BASE_URL,TIMEOUT} from './config'

const instance = axios.create({
    // 默认的配置
    baseURL: BASE_URL, // -> http://123.57.176.198:3000/banner
    timeout: TIMEOUT, // -> 5000
    headers: {},
  })

  instance.interceptors.request.use((config:AxiosRequestConfig)=>{
        return config
  },err=>{

  })

  instance.interceptors.response.use((res:AxiosResponse)=>{
      return res.data
  },err=>{
      if (err && err.response){
        switch (err.response.status) {
            case 400:
              console.log('请求错误')
              break
            case 401:
              console.log('未授权访问')
              break
            default:
              console.log('其他错误信息')
          }
        }
        return err
  })

  export default instance