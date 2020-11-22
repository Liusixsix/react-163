import { Action } from "redux";
import { banner } from "..";

export  enum actionTypes  {
    CHANGE_TOP_BANNER = 'change_top_banner'
}


interface defaultState {
    topBanners:banner[]
}

const defaultState:defaultState = {
    topBanners :[]
}
 
export default function reducer(state = defaultState,action:any){
    switch (action.type){
        case actionTypes.CHANGE_TOP_BANNER :
            state.topBanners = action.data
            return {...state}
        default:
            return state
    }
}

