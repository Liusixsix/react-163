import React, { memo } from 'react'
import {SongItemWrapper} from './style'
import {NavLink, useHistory} from 'react-router-dom'
import { PlayCircleOutlined,SmallDashOutlined } from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import { getSongDetailAction } from '@/pages/player/store/action'
import { useAddPlaylist } from '@/hook'
import { formatDate } from '@/utils'

interface Iprops{
    currentRanking:number
    coverPic?:string
    songName:string
    singer:string
    songId:number
    dt:number
    ar:any[]
    mv?:number
}
export default memo(function SongItem(props:Iprops) {
    const {coverPic,songName,songId,currentRanking,dt,ar,mv} = props

    const history = useHistory()
    const dispatch = useDispatch()
    const playList= useSelector((state:any)=>state.getIn(['play','playList']))
    const playMusic = (e,isTo=false)=>{
      if (!isTo) e.preventDefault()
       dispatch(getSongDetailAction(songId))
       history.push('/discover/song') 
    }
    const addPlaylist  = useAddPlaylist(playList)

    const handleClickMv = ()=>{
      history.push(`/mv/${mv}`)
    }

    return (
       <SongItemWrapper className={`${currentRanking <=3?'ranking':''}`}>
         <div className={`song-item`}>
            <div className='rank-count'>{currentRanking}</div>
            <div className='song-info text-nowrap '>
                {
                  currentRanking<=3?(
                    <div><img className='cover' src={coverPic + '?param=50y50'} alt="" /> 
                    <PlayCircleOutlined
                    className="font-active"
                    onClick={(e) => playMusic(e)}
                  />
                     <a href="/play" onClick={(e) => playMusic(e)}  className="text-nowrap">
                      {songName}
                    </a>
                    { !!mv&&<SmallDashOutlined style={{marginLeft:5}} onClick={handleClickMv}/>}
                  </div>
                  ):(
                    <div>
                      <PlayCircleOutlined
                    className="font-active"
                    onClick={(e) => playMusic(e)}
                  />
                     <a href="/play" onClick={(e) => playMusic(e)}  className="text-nowrap">
                      {songName}
                    </a>
                    { !!mv&&<SmallDashOutlined style={{marginLeft:5}} onClick={handleClickMv}/>}
                    </div>
                  )
                }
               
            </div>
         </div>
         <div className='timer'>
              <span className='time'>{formatDate(dt,"mm:ss")}</span>
              <div className="right-operator">
              <button
                // href="/discover/recommend" 
                className="sprite_icon2 btn addto"
                onClick={e => addPlaylist(e,songId)}
              ></button>
            </div>
            </div>
            <div className='author text-nowrap'>
              {
                ar && ar.map((item,index)=>{
                  return (
                    <span key={item.name}><a>{item.name}</a>{index +1 < ar.length && '/'}</span>
                  )
                })
              }
            </div>
       </SongItemWrapper>
    )
})


{/* <div className="song-item rank-count">{currentRanking}</div>
            <NavLink
                to="/discover/song"
                className="song-item"
              onClick={(e) => playMusic(e, true)}
            >
         {currentRanking <= 3  && <img className='cover' src={coverPic + '?param=50y50'} alt="" />}
        </NavLink>
      
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
        </div> */}