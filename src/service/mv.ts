import request from './request'

export function getMvDetail(id){
    return request({
        url:'/mv/detail',
        params:{
            mvid:id
        }
    })
}


export const getMvUrl = (id)=>{
    return request({
        url:`/mv/url?id=${id}`
    })
 }


export const commentMv = (id,page=1,limit=20)=>{
    return request({
        url:`/comment/mv`,
        params:{
            id,
            limit,
            offset:(page-1)*limit,
        }
    })
 }

 export const simiMv = (id)=>{
     return request({
         url:`/simi/mv?mvid=${id}`
     })
 }
