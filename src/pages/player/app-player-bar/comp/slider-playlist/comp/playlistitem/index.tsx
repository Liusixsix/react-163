import React, { memo } from 'react'
import {PlaylistItemWrapper} from './style'
import { DownloadOutlined,DeleteOutlined,GithubOutlined,LikeOutlined } from '@ant-design/icons'
import { formatDate } from '@/utils'
import { useDispatch, useSelector } from 'react-redux'
import { changePlayListAction } from '@/pages/player/store/action'
interface Iprops{
    songName:string
    singer:string
    duration:number
    songId:number
    clickItem:()=>void
    isActice?:string
    changeMusic:(tag)=>void
}

export default memo(function PlaylistItem(props:Iprops) {
    const {songName,singer,clickItem,isActice,duration,songId,changeMusic} = props

     // redux hook
  const dispatch = useDispatch()
  const {playList} = useSelector((state:any) => ({
    playList: state.getIn(['play', 'playList'])
  }))

    const clearCurrentSong =(e)=>{
        e.stopPropagation()
        const currentSongIndex = playList.findIndex(song=>song.id === songId)
        if(playList.length<=1)return
        playList.splice(currentSongIndex,1)
        dispatch(changePlayListAction(playList))
        changeMusic(1)

    }
    return (
        <PlaylistItemWrapper onClick={clickItem} className={isActice}>
            <div className='song-name'>{songName}</div>
            <div className="control-and-singer">
                <LikeOutlined />
                <GithubOutlined />
                <DownloadOutlined />
                <DeleteOutlined onClick={e=>clearCurrentSong(e)} />
                 <span>{singer}</span>
            </div>
             <div className="duration">{formatDate(duration,'mm:ss')}</div>
        </PlaylistItemWrapper>
    )
})
