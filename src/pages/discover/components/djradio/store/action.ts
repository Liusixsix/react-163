import { djtoplis, getCate, getDjRecommend } from '@/service/djradio'
import {actionTypes} from './index'


export const changeCateAction = (res:any)=>({
    type:actionTypes.CHANGE_CATE,
    data:res.categories
})

export const changeCateIdAction = (id)=>({
    type:actionTypes.CHANGE_CATE_ID,
   id
})

export const changeRecommnet = (res:any)=>({
    type:actionTypes.changeRecommnet,
   data:res.djRadios
})

export const changeRanking = (res:any)=>({
    type:actionTypes.changeRanking,
   data:res.toplist
})



export const getCateAction = ()=>{
    return (dispatch)=>{
          getCate().then((res:any)=>{
              dispatch(changeCateAction(res))
          })
    }
}

export const getRecommnetAction = (id)=>{
    return (dispath)=>{
        getDjRecommend(id).then(res=>{
            dispath(changeRecommnet(res))
        })
    }
}

export const getRankinfAction = (id,offset,limit)=>{
    return (dispath)=>{
        djtoplis(id,offset,limit).then(res=>{
            dispath(changeRanking(res))
        })
    }
}