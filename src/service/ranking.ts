import requset from './request'


export const getTopList = ()=>{
    return requset({
        url:'/toplist'
    })
}