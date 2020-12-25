import {Map} from 'immutable'

export enum actionTypes {
    CHANGE_SONGS = 'CHANGE_SONGS',
    CHANGE_TOTAL = 'CHANGE_TOTAL'
}

const defaultState = Map({
    songs:[],
    total:0
})


export default  function reducer(state = defaultState, action: any){
    switch(action.type){
        case actionTypes.CHANGE_SONGS:
            return state.set('songs',action.data)
        case actionTypes.CHANGE_TOTAL:
            return state.set('total',action.total)
        default : 
        return state
    }
}