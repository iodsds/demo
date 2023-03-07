import { Notification } from 'element-ui'
import  base  from './base'
import axios from 'axios';


let root = '';

switch (process.env.NODE_ENV) {
  case 'development':
    root = base.development;
    break;
  case 'mock':
    root = base.mock;
    break;
  default:
    root = base.production;
    break;
}





/**
 * 自定义判断元素类型JS
 *
 * @param obj
 * @returns {string}
 */
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
 * 参数过滤函数,返回过滤后的参数
 *
 * @param o 被过滤的参数
 * @returns {*}
 */
function filterNull(o) {
  for (let key in o) {
    if (o.hasOwnProperty.call(key)) {
      if (o[key] === null) {
        delete o[key]
      }
      if (toType(o[key]) === 'string') {
        o[key] = o[key].trim()
      } else if (toType(o[key]) === 'object') {
        o[key] = filterNull(o[key])
      } else if (toType(o[key]) === 'array') {
        o[key] = filterNull(o[key])
      }
    }
  }
  return o
}

/**
 * http request 请求拦截器
 */
axios.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error).catch(res => {
    // Notification.error('登录失效了');
    console.log(res)
  })
});

/**
 * http response 响应拦截器
 * @namespace axios.interceptors
 */
axios.interceptors.response.use(    
  response => {   
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
      // 否则的话抛出错误
      if (response.status === 200) {            
          return Promise.resolve(response);        
      } else {            
          return Promise.reject(response);        
      }    
  },    
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {            
      if (error.response.status) {            
          switch (error.response.status) {                
              // 401: 未登录
              // 未登录则跳转登录页面，并携带当前页面的路径
              // 在登录成功后返回当前页面，这一步需要在登录页操作。                
              
              // 404请求不存在
              case 404:
                Notification.error(error.response.status + "网络请求不存在!");
                  break;
              // 其他错误，直接抛出错误提示
              case 500:
                Notification.error(error.response.status + "服务端异常!");
                  break;
              // 其他错误，直接抛出错误提示
              default:
                Notification.error(error.response.status);
                  // Toast({
                  //     message: error.response.data.message,
                  //     duration: 1500,
                  //     forbidClick: true
                  // });
          }
          return Promise.reject(error.response);
      }
  }    
);
// axios.interceptors.response.use(response => {
//   return response
// }, error => {
//   return Promise.reject(error.response.data); // 返回接口返回的错误信息
// });

/**
 * 接口处理函数
 * @param method 请求方法 GET、POST、PUT、DELETE
 * @param url 请求路径url
 * @param params 请求参数
 * @param success 请求成功回调函数
 * @param failure 请求失败回调函数
 */
function apiAxios(method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    baseURL: root,
    responseType: '',//url.indexOf('extemplate') !== -1 || url.indexOf('explandata') !== -1 ? 'blob' : ''
    withCredentials: true
  }).then(function (res) {
    if(res.status === 200) {
      if(res.data.success === false) {
        Notification.error(res.data.message);
      } else {
        success(res.data)
      }
      
    } else {
      if (failure) {
        failure(res.data)
      } else {
        Notification.error(res.data.message);
      }
    }
  }).catch( err => {
    console.log(222222, err)
    if(!err.success){
      Notification.error(err.message);
    }
    // let errStr = ''
    // if(err && err.indexOf("<title>") != -1){
    //   errStr = err.split('<title>')[1].split('</title>')[0]
    // } else {
    //   errStr = '请求异常，请检查网络或者请求链接!'
    // }
    // Notification.error(errStr);
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
