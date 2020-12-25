import { fromJS } from 'immutable'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopItemInfoAction } from '../../store/action'
import {ToplistMainWrapper} from './style'
import SongItem from '../song-item'

export default memo(function PlayList() {
    const dispatch = useDispatch()

    const {currentToplistId,currentToplist=[]} = useSelector((state:any)=>({
        currentToplistId:state.getIn(['ranking','currentToplistId']),
        currentToplist:state.getIn(['ranking','currentToplist'])
    }))

    useEffect(()=>{
        dispatch(getTopItemInfoAction(currentToplistId))
    },[currentToplistId, dispatch])
    return (
        <ToplistMainWrapper>
             <div className="toplist-main">
                <div className="main-header">
                <div className="sprite_table header-item"></div>
                <div className="sprite_table header-item header-title">标题</div>
                <div className="sprite_table header-item header-time">时长</div>
                <div className="sprite_table header-item header-singer">歌手</div>
            </div>
            <div className="main-list">
                {
                    currentToplist.map((item,index)=>{
                        return  <SongItem
                                    key={item.id}
                                    currentRanking={index+1} 
                                    coverPic={index < 3?item.al.picUrl:''}
                                    songName={item.name}
                                    singer={item.ar[0].name}
                                    songId={item.id}
                                    dt={item.dt}
                                    ar={item.ar}
                                 ></SongItem>
                    })
                }
               
            </div>
        </div>
        </ToplistMainWrapper>
    )
})
