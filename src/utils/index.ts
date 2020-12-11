/**
 * @description 防抖
 * @param func 
 * @param time 间隔时间
 * @param immediate 是否默认第一次立即执行
 */
export const debounce = (func:any,time:number,immediate:boolean = false)=>{
    let timer:number|undefined 
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
  


function _padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }


  export function getPlayUrl (id:number){
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  }


export function getRandom(num:number){
  return Math.floor(Math.random() * num )
}