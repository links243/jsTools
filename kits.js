
var kits = {};

kits.dispatchZero = function (num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

// 把方法都放到对象的身上
kits.formatDate = function () {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour);
  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

kits.randomInt = function(n,m){
  return Math.floor(Math.random() * (m-n+1) + n);
}

// 常见的给id的方式1
// 当前时间戳 + 大的随机数
kits.getId = function(){
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime();// 得到的是从1970年1月1日到现在为止的毫秒总数
  // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(100000,999999);
  // 把两个数字连起来
  let id = time + '' + r;
  return id;
}

// 返回随机RGB颜色
kits.randomRGBColor = function(n,m) {
  let R = Math.floor(Math.random() * (m - n + 1) + n);
  let G = Math.floor(Math.random() * (m - n + 1) + n);
  let B = Math.floor(Math.random() * (m - n + 1) + n);
  return `(${R},${G},${B})`;
}

// 封装了一个随机生成十六进制颜色的函数
kits.randomHaxColor = function() {
  // 定义一个可以存放构成十六进制颜色值的值
  let colorValue = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
  // 将字符串分割为字符数组
  let colorArray = colorValue.split(",");
  // 定义一个字符串变量用来存储字符串变量，先将#存放进去
  let color = "#";
  // 生成一个字符长度为16的随机数组
  colorArray[Math.floor(Math.random() * 16)];
  // 遍历该数组用来存储新的十六进制的颜色
  for (let i = 0; i < 6; i++) {
    color += colorArray[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * @description 从本地存储里获取数据
 * @param {string} key 要取出的数据的key名
 * @returns {object} 从本地存储取通过JSON转换后的的数据
 */
kits.getLocalStorage = function(key) {
  let json = localStorage.getItem(key);
  let arr = JSON.parse(json);
  return arr || [];
}

/**
 * @description 封装好的把复杂数据存储到本地里面的方法，默认是存储json格式字符串
 * @param {string} key 存储到本地里面的键
 * @param {object} obj 要存储的复杂数据
 * @returns undefined
 */
kits.savaLocalStorage= function(key,obj) {
  let json = JSON.stringify(obj);
  localStorage.setItem(key, json);
}

/**
 * @description 根据对应的id从localStorage中指定键(key)的数组中删除一条数据
 * @param {string} key 要删除数据的键
 * @param {number} id 要删除的数据id
 * @returns undefined
 */
kits.deleteLocalDataById = function(key, id) {
  var data = localStorage.getItem(key);
  var arr = JSON.parse(data);
  arr = arr || [];
  arr.forEach(function(e, i) {
    if (e.id == id) {
      arr.splice(i, 1);
    }
  });
  data = JSON.stringify(arr);
  localStorage.setItem(key, data);
};

/**
 * @description 根据id修改localStorage里面的指定键(key)的数组数据
 * @param {string} key 要修改数据的键
 * @param {number} id 要修改的数据id
 * @returns undefined
 */
kits.modifyLocalDataById = function(key, id, datas) {
  var data = localStorage.getItem(key);
  var arr = JSON.parse(data);
  arr = arr || [];
  arr.forEach(function(e, i) {
    if (e.id == id) {
      e = datas;
    }
  });
  data = JSON.stringify(arr);
  localStorage.setItem(key, data);
};