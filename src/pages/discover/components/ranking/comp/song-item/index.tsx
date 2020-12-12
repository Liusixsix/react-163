import React, { memo } from 'react'
import {SongItemWrapper} from './style'
import {NavLink} from 'react-router-dom'
import { PlayCircleOutlined } from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import { getSongDetailAction } from '@/pages/player/store/action'
import { useAddPlaylist } from '@/hook'

interface Iprops{
    currentRanking:number
    coverPic?:string
    songName:string
    singer:string
    songId:number
}
export default memo(function SongItem(props:Iprops) {
    const {coverPic,songName,songId,currentRanking} = props

    const dispatch = useDispatch()
    const playList= useSelector((state:any)=>state.getIn(['play','playList']))

    const playMusic = (e,isTo=false)=>{
     if (!isTo) e.preventDefault()
     dispatch(getSongDetailAction(songId))
    }
    const addPlaylist  = useAddPlaylist(playList)
    return (
       <SongItemWrapper>
         <div className="song-item rank-count">{currentRanking}</div>
         {true && (
            <NavLink
                to="/discover/song"
                className="song-item"
              onClick={(e) => playMusic(e, true)}
            >
          <img src={coverPic + '?param=50y50'} alt="" />
        </NavLink>
      )}
        <div className="song-item song-info">
        <div className="left-info">
          <PlayCircleOutlined
            className="font-active"
            onClick={(e) => playMusic(e)}
          />
          <a href="/play" onClick={(e) => playMusic(e)}  className="text-nowrap">
            {songName}
          </a>
        </div>
        <div className="right-operator">
          <button
            // href="/discover/recommend"
            className="sprite_icon2 btn addto"
            onClick={e => addPlaylist(e,songId)}
          ></button>
        </div>
        </div>
       </SongItemWrapper>
    )
})
