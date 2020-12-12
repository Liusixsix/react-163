import request from './request'

export function getSongDetail(id){
    return request({
        url:'/song/detail',
        params:{
            ids:id
        }
    })
}

export function getLyric(id){
    return request({
        url:'/lyric',
        params:{
            id
        }
    })
}

export function getHotComment(id, type = 0) {
    return request({
      url: '/comment/hot',
      params: {
        id,
        type,
      },
    });
  }
  