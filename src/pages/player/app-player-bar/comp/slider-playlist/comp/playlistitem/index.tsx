import React, { memo } from 'react'
import {PlaylistItemWrapper} from './style'
import { DownloadOutlined,DeleteOutlined,GithubOutlined,LikeOutlined } from '@ant-design/icons'
import { formatDate } from '@/utils'

interface Iprops{
    songName:string
    singer:string
    duration:number
    songId:number
    clickItem:()=>void
    isActice?:string
}

export default memo(function PlaylistItem(props:Iprops) {
    const {songName,singer,clickItem,isActice,duration} = props

    const clearCurrentSong =()=>{

    }
    return (
        <PlaylistItemWrapper onClick={clickItem} className={isActice}>
            <div className='song-name'>{songName}</div>
            <div className="control-and-singer">
                <LikeOutlined />
                <GithubOutlined />
                <DownloadOutlined />
                <DeleteOutlined onClick={e=>clearCurrentSong()} />
                 <span>{singer}</span>
            </div>
             <div className="duration">{formatDate(duration,'mm:ss')}</div>
        </PlaylistItemWrapper>
    )
})
