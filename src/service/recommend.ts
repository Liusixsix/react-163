import request from "./request";

export const getTopBanners = () => {
    return request({
        url:'/banner'
    })
};


export const getHotList = ()=>{
    return request({
        url:'/personalized?limit=8'
    })
}

// 新碟上架
export const getNewest = ()=>{
    return request({
        url:'/album/newest'
    })
}

// 榜单
export const getPlayList = (id:number)=>{
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}

export const getArtist = ()=>{
    return request({
        url:'/artist/list?limit=5'
    })
}