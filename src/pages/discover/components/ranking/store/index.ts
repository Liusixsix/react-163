import {Map} from 'immutable'
export enum actionTypes {
    CHANGE_TOPLIST = 'CHANGE_TOPLIST'
  }
  
  interface defaultState {
    topList: any[];
  }
  
  const defaultState = Map({
    topList: [],
  })
  
  export default function reducer(state = defaultState, action: any) {
    switch (action.type) {
      case actionTypes.CHANGE_TOPLIST:
        return state.set('topList',action.data)
     
      default:
        return state;
    }
  }
  