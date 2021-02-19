import request from './request'


export const getCate = ()=>{
    return request({
        url:'/dj/catelist'
    })
}

export const getDjRecommend=(id)=>{
    return request({
        url:`/dj/recommend/type?type=${id}`
    })
}

export const djtoplis=(type,offset,limit=20)=>{
    return request({
        url:`/dj/toplist?type=${type}&limit=${limit}&offset=${offset}`
    })
}