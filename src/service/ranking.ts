import requset from './request'


export const getTopList = ()=>{
    return requset({
        url:'/toplist'
    })
}
export function getToplistDetail(id) {
    return requset({
      url: '/playlist/detail',
      params: {
        id
      }
    })
  }