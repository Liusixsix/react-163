import React, { memo, useCallback, useRef } from "react";
import { SliderPlayListWrap, SliderPlaylistHeader,SliderPlaylistMain } from "./style";
import { ClearOutlined, CloseOutlined, HeartOutlined } from "@ant-design/icons";
import { useDispatch,useSelector,shallowEqual } from "react-redux";
import {changePlayListAction, getSongDetailAction} from '../../../store/action'
import Playlistitem from "./comp/playlistitem";
import LyricContent from "./comp/playlistitem/lyric-content";
import { useClick } from "@/hook/useClick";
interface Iprops {
  isShowSlider: boolean;
  currentSong:any,
  closeWindow:()=>void
  isPlaying:boolean
  changeSong:(tag:number)=>void
  playListCount:number
}

export default memo(function SliderPlaylist(props: Iprops) {
  const {currentSong,closeWindow,playListCount,changeSong,isShowSlider } = props;

  
  


  const dispatch = useDispatch()
  const {  playList, currentSongIndex } = useSelector(
    (state:any) => ({
      playList: state.getIn(['play', 'playList']),
      currentSongIndex: state.getIn(['play', 'currentSongIndex'])
    }),
    shallowEqual
  )

  const clearAllPlaylist = (e: any) => {
    e.preventDefault()
    playList.splice(0,playList.length)
    dispatch(changePlayListAction(playList))
  };

  const clickItem= useCallback((index,item)=>{
    dispatch(getSongDetailAction(item.id))
  },[dispatch])

  return (
    <SliderPlayListWrap onClick={e => e.stopPropagation()}>
      <SliderPlaylistHeader>
        <div className="playlist-header-left">
          <h3 className="header-title">播放列表({playListCount})</h3>
          <div>
            <a
              href="/favorite"
              className="header-icon"
              onClick={(e) => e.preventDefault()}
            >
              <HeartOutlined />
              <span>收藏一下</span>
            </a>
            <a
              href="/clear"
              onClick={(e) => clearAllPlaylist(e)}
              className="header-icon"
            >
              <ClearOutlined />
              <span>清除播放列表</span>
            </a>
          </div>
        </div>
        <div className="playlist-header-right">
         <div className="song-name">{currentSong.name}</div>
          <div className="close-window" onClick={closeWindow}><CloseOutlined /></div>
         </div>
      </SliderPlaylistHeader>
      <SliderPlaylistMain>
          <div className='main-playlist'>
              {
                  playList.map((item,index)=>{
                      return  <Playlistitem 
                                  key={item.id} 
                                  isActice={currentSongIndex===index?'active':''}
                                  songName={item.name}
                                  singer={item.ar[0].name}
                                  duration={item.dt}
                                  songId={item.id}
                                  clickItem={()=>clickItem(index,item)}
                                  changeMusic={changeSong}
                                ></Playlistitem>
                            })
              }
         
          </div>       
         <div className="main-line"></div>
         <LyricContent />
      </SliderPlaylistMain>
    </SliderPlayListWrap>
  );
});
