// 保留n位小数，小数点后面不保留0
export function toDecimal(x, n=2) {
  let f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  let g = Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  let s = g.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + n) {
    s += '0';
  }
  return parseFloat(s);
}
// 判断数据类型
export function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}
// 深拷贝
export function deepCopy(data) {
  const t = typeOf(data);
  let o;
  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }
  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}
// 深度合并
export function deepMerge() {
  let i = 0;
  let result = {};
  for (; i < arguments.length; i++) {
    let attributes = arguments[i];
    for (let key in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, key)) {
        if (typeOf(attributes[key]) === 'object') {
          result[key] = deepMerge(result[key], attributes[key]);
        } else {
          result[key] = attributes[key];
        }
      }
    }
  }
  return result;
}
// 生成随机数
export function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
// 生成随机字符串
export function randomString(len) {
  len = len || 32;
  let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  let maxPos = $chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}
// 生成随机颜色
export function randomColor() {
  return (
    '#' +
    ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  );
}
// 生成uuid
export function uuid() {
  let s = [];
  let hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';
  return s.join('');
}
// 生成guid
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (Math.random() * 16) | 0;
    let v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
// 正则验证手机号
export function isPhone(phone) {
  return /^1[3456789]\d{9}$/.test(phone);
}
// 正则验证邮箱
export function isEmail(email) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])/.test(email);
}
// 正则验证身份证
export function isIdCard(idCard) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard);
}
// 正则验证URL
export function isURL(url) {
  return /^http[s]?:\/\/.*/.test(url);
}
// 正则验证IP
export function isIP(ip) {
  return /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(ip);
}
// 正则验证数字
export function isNumber(number) {
  return /^[0-9]*$/.test(number);
}
// 正则验证字母
export function isLetter(letter) {
  return /^[a-zA-Z]*$/.test(letter);
}
// 正则验证中文
export function isChinese(chinese) {
  return /^[\u4e00-\u9fa5]*$/.test(chinese);
}
// 正则验证大写字母
export function isUpperCase(str) {
  return /^[A-Z]+$/.test(str);
}
// 正则验证小写字母
export function isLowerCase(str) {
  return /^[a-z]+$/.test(str);
}
// 正则验证大写字母开头
export function isAlphabets(str) {
  return /^[A-Za-z]+$/.test(str);
}
// 正则验证字母和数字
export function isAlphanumeric(str) {
  return /^[0-9a-zA-Z]+$/.test(str);
}
// 正则验证密码
export function isPassword(str) {
  return /^[a-zA-Z0-9]{6,16}$/.test(str);
}
// 正则验证强密码
export function isStrongPassword(str) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/.test(str);
}
// q: 1. 为什么要使用正则表达式？
// a: 1. 正则表达式是一种文本模式，用于匹配文本中的特定字符组合。正则表达式是一个特殊的字符序列，一个字符串是否与我们所设定的这样的字符序列相匹配。
// q: 2. vue常用的正则表达式有哪些？
// a: 2. 手机号：/^1[3456789]\d{9}$/; 邮箱：/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 身份证：/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; URL：/^http[s]?:\/\/.*/; IP：/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/; 数字：/^[0-9]*$/; 字母：/^[a-zA-Z]*$/; 中文：/^[\u4e00-\u9fa5]*$/; 大写字母：/^[A-Z]+$/; 小写字母：/^[a-z]+$/; 大写字母开头：/^[A-Za-z]+$/; 字母和数字：/^[0-9a-zA-Z]+$/; 密码：/^[a-zA-Z0-9]{6,16}$/; 强密码：/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
// q: 3. vue常用公共方法有哪些？
// a: 3. 1. 数组去重：uniqueArr(arr); 
// 2. 数组最大值：maxArr(arr); 3. 数组最小值：minArr(arr);
//  4. 数组求和：sumArr(arr); 5. 数组平均值：averageArr(arr);
//   6. 数组随机排序：shuffle(arr); 7. 数组排序：sortArr(arr, type); 
//   8. 数组对象排序：sortObjArr(arr, key, type); 9. 数组对象去重：uniqueObjArr(arr, key);
//    10. 数组对象根据key值去重：uniqueObjArrByKey(arr, key); 11. 数组对象根据key值合并：mergeObjArrByKey(arr, key);
//     12. 数组对象根据key值合并并求和：mergeObjArrByKeySum(arr, key); 13. 数组对象根据key值合并并求平均值：mergeObjArrByKeyAverage(arr, key);
//      14. 数组对象根据key值合并并求最大值：mergeObjArrByKeyMax(arr, key); 15. 数组对象根据key值合并并求最小值：mergeObjArrByKeyMin(arr, key); 
//      16. 数组对象根据key值合并并求最大值和最小值：mergeObjArrByKeyMaxMin(arr, key); 17. 数组对象根据key值合并并求和并求平均值：mergeObjArrByKeySumAverage(arr, key);
//       18. 数组对象根据key值合并并求和并求最大值：mergeObjArrByKeySumMax(arr, key); 19. 数组对象根据key值合并并求和并求最小值：mergeObjArrByKeySumMin(arr, key);
//       20. 数组对象根据key值合并并求和并求最大值和最小值：mergeObjArrByKeySumMaxMin(arr, key); 21. 数组对象根据key值合并并求平均值并求最大值：mergeObjArrByKeyAverageMax(arr, key);
//       22. 数组对象根据key值合并