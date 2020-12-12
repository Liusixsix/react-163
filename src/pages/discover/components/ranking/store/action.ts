import { getTopList, getToplistDetail } from '@/service/ranking'
import {actionTypes} from './index'

export const changeTopList = (res:any)=>({
    type: actionTypes.CHANGE_TOPLIST,
    data: res.list, 
})

export const changeTitleInfo = (info)=>({
    type: actionTypes.CHANGE_TITLE_INFO,
    info 
})

export const changeCurrentId = (id)=>({
    type:actionTypes.CHANGE_TOP_LIST_ID,
    id
})

export const changeCurrentList = (list) =>({
    type:actionTypes.CHANGE_CURRENT_TOP_LIST,
    list
})


// http
export const getTopListAction = ()=>{
    return (dispatch:any)=>{
        getTopList().then(res=>{
            dispatch(changeTopList(res))
        })
    }
}

export const getTopItemInfoAction = (id)=>{
    return (dispatch)=>{
        getToplistDetail(id).then((res:any)=>{
            const currentToplist = res && res.playlist.tracks
            const {coverImgUrl,name,trackNumberUpdateTime,playCount,subscribedCount,commentCount,shareCount} = res && res.playlist
            const toplistTitleInfo = {coverImgUrl,name,trackNumberUpdateTime,playCount,subscribedCount,commentCount,shareCount}
            dispatch(changeTitleInfo(toplistTitleInfo))
            dispatch(changeCurrentList(currentToplist))  
        })
    }
}