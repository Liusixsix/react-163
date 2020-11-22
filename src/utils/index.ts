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