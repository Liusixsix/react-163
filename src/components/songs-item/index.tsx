import { getCount } from '@/utils'
import React, { memo } from 'react'
import {SongsItemWrapper} from './style'

export interface ISongsItemProps{
    name:string
    playCount:number
    coverImgUrl:string
    nickname:string,
    handleClickItem:(e:any)=>void
}


const SongsItem:React.FC<ISongsItemProps> = props=>{
    const {name,playCount,coverImgUrl,nickname,handleClickItem} = props
    return (
        <SongsItemWrapper>
            <div className='cover-wrapper'>
                <img src={coverImgUrl + '?param=140x140'} alt=""/>
                <a onClick={handleClickItem} href="" className='mask'></a>

                <div className='bottom msk'>
                    <div className="left"> 
                        <i className='icon-header'></i>
                        <span className='count'>{getCount(playCount)}</span>
                    </div>
                   
                </div>
            </div>
            <div className='cover-title text-nowrap'>{name}</div>
            <div className='cover-source text-nowrap'>{nickname}</div>

           
        </SongsItemWrapper>
    )
}


export default memo(SongsItem)