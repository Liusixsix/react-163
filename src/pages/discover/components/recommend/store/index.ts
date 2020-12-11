import { Map } from 'immutable'
import { banner } from "..";

export enum actionTypes {
  CHANGE_TOP_BANNER = "change_top_banner",
  CHANGE_HOT_LIST = "change_hot_list",
  CHANGE_NEWEST = "change_newest",
  CHANGE_UP_RANKING = "CHANGE_UP_RANKING",
  CHANGE_NEW_RANKING = "CHANGE_NEW_RANKING",
  CHANGE_ORIGIN_RANKING = "CHANGE_ORIGIN_RANKING",
  CHANGE_ARTIST = 'CHANGE_ARTIST'
}

// interface defaultState {
//   topBanners: banner[];
//   hotList: any[];
//   newEst: any[];
//   upRanking: any;
//   newRanking: any;
//   originRanking: any;
//   artist:any[]
// }

const defaultState = Map({
  topBanners: [],
  hotList: [],
  newEst: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},
  artist:[]
})

export default function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners',action.data)
    case actionTypes.CHANGE_HOT_LIST:
      return state.set('hotList',action.data)
    case actionTypes.CHANGE_NEWEST:
      return state.set('newEst',action.data)
    case actionTypes.CHANGE_UP_RANKING:
      return  state.set('upRanking',action.data)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking',action.data)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking',action.data)
      case actionTypes.CHANGE_ARTIST:
        return state.set('artist',action.data)
    default:
      return state;
  }
}
