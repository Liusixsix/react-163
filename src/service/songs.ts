import requset from './request'

export const getSongs = (limit:number,offset:number)=>{
    return requset({
        url:'/top/playlist',
        params:{
            limit,
            offset,
        }
    })
}