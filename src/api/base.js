// base.js:
 
/**
 * 接口域名的管理
 */
// switch (process.env.NODE_ENV) {
//   case 'development':
//     process.env.BASE_URL = '/api/cmccuc-platform';
//     break;
//   case 'mock':
//     process.env.BASE_URL = '/' + window.location.href.split("/")[3];
//     break;
//   default:
//     process.env.BASE_URL = '';
//     break;
// }
const base = {// development开发环境  debug  production生产环境
  development: '/api',    
  production: '',
  mock: ''
}

export default base;