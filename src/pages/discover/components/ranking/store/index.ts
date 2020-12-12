import { Map } from "immutable";
export enum actionTypes {
  CHANGE_TOPLIST = "CHANGE_TOPLIST",
  CHANGE_TITLE_INFO = "CHANGE_TITLE_INFO",
  CHANGE_INDEX = "CHANGE_INDEX",
  CHANGE_TOP_LIST_ID = "CHANGE_TOP_LIST_ID",
  CHANGE_CURRENT_TOP_LIST = "CHANGE_CURRENT_TOP_LIST",
}

const defaultState = Map({
  topList: [],
  currentToplistTitleInfo: {},
  currentIndex: 0,
  currentToplistId: 19723756,
  currentToplist: [],
});

export default function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_TOPLIST:
      return state.set("topList", action.data);
    case actionTypes.CHANGE_TITLE_INFO:
      return state.set("currentToplistTitleInfo", action.info);
    case actionTypes.CHANGE_INDEX:
      return state.set("currentIndex", action.index);
    case actionTypes.CHANGE_TOP_LIST_ID:
      return state.set("currentToplistId", action.id);
      case actionTypes.CHANGE_CURRENT_TOP_LIST:
      return state.set("currentToplist", action.list);
    default:
      return state;
  }
}
