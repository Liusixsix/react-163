import { getLyric, getSongDetail ,getHotComment} from "@/service/player";
import { actionTypes } from "./index";
import {getRandom} from '@/utils'
import { parseLryic } from "@/utils/parse-lyric";
// 修改歌曲详情
const changeCurrenSongAction = (currentSong: any) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

// 更改索引
const changeSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
});

export const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC,
  lyricList,
});

export const changeCurretLyricIndex = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index,
});


export const changeHotComments = (hotComments) => ({
  type: actionTypes.CHANGE_HOT_COMMENT,
  hotComments,
});


export const changeSequence = (sequence: number) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});



export const changeCurrenSong = (tag: number) => {
  return (dispatch, getState) => {
    const PlayList = getState().getIn(["play", "playList"]);
    const sequence = getState().getIn(["play", "sequence"]);
    let currentSongIndex = getState().getIn(["play", "currentSongIndex"])
    switch (sequence) {
      case 1: //随机播放
      let randomIndex = getRandom(PlayList.length)
      while(randomIndex===currentSongIndex){
        randomIndex = getRandom(PlayList.length)
      }
      currentSongIndex = randomIndex;
      break;
      default: //顺序播放
        currentSongIndex += tag
        if(currentSongIndex >= PlayList.length) currentSongIndex = 0
        if(currentSongIndex<0) currentSongIndex = PlayList.length - 1
    }
    const currentSong = PlayList[currentSongIndex]
    dispatch(changeCurrenSongAction(currentSong))
    dispatch(changeSongIndexAction(currentSongIndex))
  };
};

// action
export const getSongDetailAction = (idx: number) => {
  return (dispatch, getState) => {
    // 1.根据id 查找playlist是否已经有了
    const PlayList = getState().getIn(["play", "playList"]);
    const songIndex = PlayList.findIndex((song) => idx === song.id);
    // 判断是否找到
    let song = null
    if (songIndex !== -1) {
      //找到
      dispatch(changeSongIndexAction(songIndex));
      song = PlayList[songIndex];
      dispatch(changeCurrenSongAction(song));
      dispatch(getLyricAction(song.id) )
    } else {
      //没有找到
      getSongDetail(idx).then((res: any) => {
         song = res?.songs && res?.songs[0];
        if (!song) return;
        const newPlayList = [...PlayList, song];
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrenSongAction(song));
        dispatch(getLyricAction(song.id) )
      });
    }    
  };
};


export const getLyricAction = (id)=>{
    return dispatch =>{
        getLyric(id).then((res:any)=>{
         const lyricList =  parseLryic(res?.lrc?.lyric)
         dispatch(changeLyricListAction(lyricList))
        })
    }
}

export const getAddSongDeatilAction = (id)=>{
  return (dispatch,getState) => {
    getSongDetail(id).then((res:any)=>{
      const playList = getState().getIn(['play', 'playList'])
      const songIndex = playList.findIndex(song => song.id === id)
      if(songIndex!==-1)return
      const willAddSong = res.songs && res.songs[0]
      playList.push(willAddSong)
      dispatch(changePlayListAction(playList))
    })
  }
}

export const getHotCommentAction = id=>{
  return dispatch =>{
    getHotComment(id).then((res:any)=>{
      const hotComments = res && res.hotComments 
      dispatch(changeHotComments(hotComments))
    })
  }
}