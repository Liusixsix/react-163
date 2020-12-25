import { getSongs } from '@/service/songs'
import {actionTypes} from './index'




export const changeSongsAction = (res:any)=>({
    type:actionTypes.CHANGE_SONGS,
    data:res.playlists
  })



  export const changeTotalAction = (total:number)=>({
    type:actionTypes.CHANGE_TOTAL,
    total:total
  })



  export const getSongsAction = (limit=35,offset=0)=>{
      return (dispatch)=>{
            getSongs(limit,offset).then((res:any)=>{
                dispatch(changeSongsAction(res))
                dispatch(changeTotalAction(res.total))
            })
      }
  }