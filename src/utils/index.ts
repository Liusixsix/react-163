/**
 * @description 防抖
 * @param func 
 * @param time 间隔时间
 * @param immediate 是否默认第一次立即执行
 */
export const debounce = (func:any,time:number,immediate:boolean = false)=>{
    let timer:any|undefined 
    return function (this:any,...arg:any) {
        if(immediate){
            func.apply(this,arg)
            immediate = false 
            return
        }
      clearTimeout(timer)
      timer= setTimeout(()=>{
            func.apply(this,arg)
        },time)
    }
}

export const getCount =(count:number) => {
    if(count<10000) return count
    if(Math.floor(count/10000)<10000){
         return Math.floor(count/10000) /10 +'万'
    }else{
        return Math.floor(count/100000000) /10 +'亿'
    }
}


export function formatDate(time, fmt?) {
    let date = new Date(time)
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : _padLeftZero(str)
        )
      }
    }
    return fmt
  }
  
  export function formatMonthDay(time) {
    return formatDate(time, 'MM月dd日')
  }

function _padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }


  export function getPlayUrl (id:number){
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  }


export function getRandom(num:number){
  return Math.floor(Math.random() * num )
}

export function scrollTo(element, to, duration) {
  // 当前播放时间
  if (duration <= 0) return;
  // 目标-当前距离的卷曲的top
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}


export function formatMsgTime (timespan) {

  var dateTime = new Date(timespan);

  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  var now = new Date();
  var now_new = Date.parse(now.toDateString());  //typescript转换写法

  var milliseconds = 0;
  var timeSpanStr;

  milliseconds = now_new - timespan;

  if (milliseconds <= 1000 * 60 * 1) {
    timeSpanStr = '刚刚';
  }
  else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
    timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
  }
  else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
  }
  else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
  }
  else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
    timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
  } else {
    timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
  }
  return timeSpanStr;
};


export function parseSearch(search:string){
  const paramsString = search.substring(1)
  const searchParams = new URLSearchParams(paramsString)
  return searchParams
}