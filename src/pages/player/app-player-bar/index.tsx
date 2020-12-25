import React, { memo, useEffect, useRef, useState,useCallback } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { PlayerWrapper, PlayInfo, Operator,PlayBtn,LoopBtn} from "./style";
import { Slider, Tooltip,message } from "antd";
import { DownloadOutlined, UndoOutlined } from "@ant-design/icons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {CSSTransition} from 'react-transition-group'
import { getSongDetailAction,changeSequence, changeCurrenSong,changeCurretLyricIndex } from "../store/action";
import {formatDate,getPlayUrl} from '@/utils'
import SliderPlaylist from "./comp/slider-playlist";
import { useClick } from "@/hook/useClick";

export default memo(function Player(props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isShowBar, setIsShowBar] = useState(false); //是否显示音量播放条
  const [isShowSlide,setIsShowSlide] = useState(false)
  const [isChanging, setIsChanging] = useState(false); // 是否正在滑动
  const [isPlaying, setIsPlaying] = useState(false); // 是否正在播放
  const [currentTime,setCurrentTime] = useState(0)
   const [progress,setProgress] = useState(0)

   const comRef = useRef(null)

  const dispatch = useDispatch(); 
  const { currentSong = {} ,sequence,lyricList=[],currentLyricIndex,playList} = useSelector(
    (state: any) => ({
      currentSong: state.getIn(["play", "currentSong"]),
      sequence:state.getIn(["play", "sequence"]),
      lyricList:state.getIn(["play", "lyricList"]),
      currentLyricIndex:state.getIn(["play", "currentLyricIndex"]),
      playList:state.getIn(["play", "playList"]),
    }),
    shallowEqual
  );
 

  const history = useHistory()

  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(()=>{
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current.play().then(res=>{
      setIsPlaying(true)
    }).catch(err=>{
      setIsPlaying(false)
    })
  },[currentSong])

  const picUrl = currentSong.al && currentSong.al.picUrl
  const duration = currentSong.dt || 0;//总时长
  const playListCount = playList.length

  const timeUpdate =(e)=>{
    const currentTime = e.target.currentTime
    if(!isChanging){
      setCurrentTime(currentTime * 1000)
      setProgress(currentTime * 1000 / duration * 100)
    }

    // 当前歌词
    let i = 0
    for (;i<lyricList.length;i++){
      let lyricItem = lyricList[i]
      if(currentTime * 1000 < lyricItem.totalTime){
        break; 
      }
    }
    if(i-1!==currentLyricIndex){
      dispatch(changeCurretLyricIndex(i-1))
      const content = lyricList[i-1]&&lyricList[i-1].content
     isPlaying && message.open({
        content,
        key: 'lyric',
        duration:0,
        type:'success',
        icon:<span></span>,
        className: 'lyric-css',
      })
    }
  }

  const hanleEnd = ()=>{
    if(sequence === 2){ //单曲循环
        audioRef.current.currentTime = 0
        
    }else{
      dispatch(changeCurrenSong(1))
    }
    audioRef.current.play()
  }

  //  上一首 下一首
  const changeMusic = (tag:number)=>{
    dispatch(changeCurrenSong(tag))
  }

  // 播放音乐
 // eslint-disable-next-line
 const playMusic = useCallback(()=>{
    isPlaying ? audioRef.current.pause():audioRef.current.play()
    setIsPlaying(!isPlaying)
 },[isPlaying])



  // 滑块改变
  const sliderChange = useCallback((value)=>{
    setIsChanging(true)
    const currentTime = value / 100 * duration 
    setCurrentTime(currentTime)
     setProgress(value)
  },[duration])

  const sliderAftetChange = useCallback((value)=>{
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChanging(false)
    
    if(!isPlaying){
      playMusic()
    }
  },[duration, isPlaying, playMusic])

 
  const changesequence = ()=> {
    let currentSequence:number = sequence + 1
    if(currentSequence>2){
      currentSequence = 0
    }
    dispatch(changeSequence(currentSequence))
  }

  // 音量
  const volumeChange = (value)=>{
    audioRef.current.volume = value / 100
  }
// 改变播放列表是否显示
  const changePlayListShow = useCallback(()=>{
    setIsShowSlide(!isShowSlide)
  },[isShowSlide])


  const clickSong = (e)=>{
    e.preventDefault()
    console.log(history)
    history.push({
      pathname:'/discover/song',
      state:{
        id:currentSong.id
      }
    })
  }

  
  useClick(isShowSlide,comRef,changePlayListShow)
  return (
    <PlayerWrapper className="playbar_sprite"  ref={comRef}>
      <div className="center w980">
        <div className="btns">
          <span className="playbar_sprite pre" onClick={e=>changeMusic(-1)}></span>
          <PlayBtn className="playbar_sprite play" isPlaying={isPlaying}   onClick={e=>playMusic()}></PlayBtn>
          <span className="playbar_sprite next" onClick={e=>changeMusic(1)}></span>
        </div>

        <PlayInfo>
          <NavLink to={{ pathname: "/discover/Player" }} className="image">
            <img
              src={picUrl}
              alt=""
              className="image"
            />
          </NavLink>
          <div className="play-detail">
            <div className="song-info">
              <NavLink to="/discover/song" onClick={e=>clickSong(e)} className="song-name">
                {currentSong.name}
              </NavLink>
              <a href="/author" className="singer-name">
                {currentSong.ar && currentSong.ar[0].name}
              </a>
            </div>

            <Slider value={progress}  defaultValue={0} onChange={sliderChange} onAfterChange={sliderAftetChange} />
          </div>

          <div className="song-time">
            <span className="now-time">{formatDate(currentTime,'mm:ss')} </span>
        <span className="total-time"> / {formatDate(duration,'mm:ss')}</span>
          </div>
        </PlayInfo>

        <Operator>
          <div className="left">
            <Tooltip title="下载音乐" arrowPointAtCenter>
              <a href="/" download={" "} target="_blank">
                <DownloadOutlined />
              </a>
            </Tooltip>
            <Tooltip title="重新播放" arrowPointAtCenter>
              <UndoOutlined className="refresh" />
            </Tooltip>
          </div>
          <div className="right playbar_sprite">
            <button
              className="playbar_sprite btn volume"
              onClick={(e) => setIsShowBar(!isShowBar)}
            ></button>
            <Tooltip title={['循环播放','随机播放','单曲循环'].filter((item,index)=>index===sequence)}>
              <LoopBtn playSequence={sequence} className="playbar_sprite btn loop" onClick={e=>changesequence()}></LoopBtn>
            </Tooltip>    

            <button
              className="playbar_sprite btn playlist"
              onClick={(e) => setIsShowSlide(!isShowSlide)}
            >
               <Tooltip title="播放列表">
              <span>{playListCount}</span>
              </Tooltip>
              <CSSTransition
                in={isShowSlide}
                timeout={300}
                classNames='playlist'
                unmountOnExit={true}
              > 
                <SliderPlaylist 
                 isShowSlider={isShowSlide}
                 currentSong={currentSong}
                 closeWindow={changePlayListShow}
                 isPlaying={isPlaying}
                 changeSong={changeMusic}
                 playListCount={playListCount}
                ></SliderPlaylist>
              </CSSTransition>
              </button>  
          </div>


          <div
            className="playbar_sprite top-volume"
            style={{ display: isShowBar ? "block" : "none" }}
          >
            <Slider vertical defaultValue={50} onChange={volumeChange} />
          </div>


        </Operator>
      </div>

      <audio id="audio" preload="auto" ref={audioRef} onTimeUpdate={timeUpdate} onEnded={hanleEnd}></audio>
    </PlayerWrapper>
  );
});


