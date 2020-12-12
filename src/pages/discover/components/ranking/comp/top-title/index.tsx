import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {PlayListWrapper,HeaderWrapper} from './style'
import {formatMonthDay} from '@/utils'
import { getSongDetailAction } from '@/pages/player/store/action'
export default memo(function TopTitle() {

 
    const {currentToplistTitleInfo} = useSelector((state:any)=>({
        currentToplistTitleInfo:state.getIn(['ranking','currentToplistTitleInfo'])
    }),shallowEqual)
  
    
    const {name,coverImgUrl,trackNumberUpdateTime} = currentToplistTitleInfo
    return (
        <PlayListWrapper>
            <HeaderWrapper>
                <div className='cover'>
                    <img src={coverImgUrl + '?param=150y150'} alt=""/>
                </div>
                <div className='title-info'>
                    <h2 className=''>{name}</h2>
                    <div className="update-info">
                         <span className='timer'>最近更新:{formatMonthDay(trackNumberUpdateTime)} </span>
                     </div>
                </div>
            </HeaderWrapper>
        </PlayListWrapper>
    )
})
