import { request } from './request'
import Vue from 'vue'
export const Http = {
  get: function (url, params) {
    return request(`${process.env.VUE_APP_BASEURL}`, 'get', url, undefined, undefined, params, {}, process.env.TIMEOUT)
  },
  post: function (url, data) {
    return request(`${process.env.VUE_APP_BASEURL}`, 'post', url, undefined, undefined, {}, data, process.env.TIMEOUT)
  }
}
Vue.prototype.$Http = Http
