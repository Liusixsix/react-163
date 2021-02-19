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



export const getSongsInfo = (id:number)=>{
    return requset({
        url:'/related/playlist',
        params:{
            id
        }
    })
}