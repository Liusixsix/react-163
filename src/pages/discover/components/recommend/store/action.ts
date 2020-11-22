import { actionTypes } from './index'
import {ThunkDispatch} from 'redux-thunk'
import {getTopBanners} from '@/service/recommend'

export const changeTopBannerAction = (res:any)=>({
    type:actionTypes.CHANGE_TOP_BANNER,
    data:res.banners
})



// 异步

export const getTopBannersAction = ()=>{
    return (dispatch:ThunkDispatch<any,any,any>) =>{
        getTopBanners().then(res=>{
            dispatch(changeTopBannerAction(res))
        })
    }
}