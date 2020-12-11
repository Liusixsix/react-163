import { getTopList } from '@/service/ranking'
import {actionTypes} from './index'

export const changeTopList = (res:any)=>({
    type: actionTypes.CHANGE_TOPLIST,
    data: res.list, 
})


// http
export const getTopListAction = ()=>{
    return (dispatch:any)=>{
        getTopList().then(res=>{
            dispatch(changeTopList(res))
        })
    }
}