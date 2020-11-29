import { Action } from "redux";
import { banner } from "..";

export enum actionTypes {
  CHANGE_TOP_BANNER = "change_top_banner",
  CHANGE_HOT_LIST = "change_hot_list",
  CHANGE_NEWEST = "change_newest",
  CHANGE_UP_RANKING = "CHANGE_UP_RANKING",
  CHANGE_NEW_RANKING = "CHANGE_NEW_RANKING",
  CHANGE_ORIGIN_RANKING = "CHANGE_ORIGIN_RANKING",
}

interface defaultState {
  topBanners: banner[];
  hotList: any[];
  newEst: any[];
  upRanking: any;
  newRanking: any;
  originRanking: any;
}

const defaultState: defaultState = {
  topBanners: [],
  hotList: [],
  newEst: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},
};

export default function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return { ...state, topBanners: action.data };
    case actionTypes.CHANGE_HOT_LIST:
      return { ...state, hotList: action.data };
    case actionTypes.CHANGE_NEWEST:
      return { ...state, newEst: action.data };
    case actionTypes.CHANGE_UP_RANKING:
      return { ...state, upRanking: action.data };
    case actionTypes.CHANGE_NEW_RANKING:
      return { ...state, newRanking: action.data };
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return { ...state, originRanking: action.data };
    default:
      return state;
  }
}
