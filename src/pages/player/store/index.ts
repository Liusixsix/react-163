import { Map } from "immutable";

export enum actionTypes {
  CHANGE_CURRENT_SONG = "CHANGE_CURRENT_SONG",
  CHANGE_CURRENT_SONG_INDEX = "CHANGE_CURRENT_SONG_INDEX",
  CHANGE_PLAY_LIST = 'CHANGE_PLAY_LIST',
  CHANGE_SEQUENCE = 'CHANGE_SEQUENCE',
  CHANGE_LYRIC = 'CHANGE_LYRIC',
  CHANGE_CURRENT_LYRIC_INDEX='CHANGE_CURRENT_LYRIC_INDEX'
}


const defaultState = Map({
  currentSong : {},
  currentSongIndex: 0,
  playList:[],//播放列表
  sequence: 0, // 0 循环播放 1随机播放  2单曲循环
  lyricList:[],
  currentLyricIndex:0,
});

export default function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
      case actionTypes.CHANGE_PLAY_LIST:
        return state.set("playList", action.playList);
      case actionTypes.CHANGE_SEQUENCE:
        return state.set("sequence", action.sequence);
        case actionTypes.CHANGE_LYRIC:
          return state.set("lyricList", action.lyricList);
          case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.index);
    default:
      return state;
  }
}
