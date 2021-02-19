import {Map} from 'immutable'


export enum actionTypes {
    CHANGE_CATE = 'CHANGE_CATE',
    CHANGE_CATE_ID = 'CHANGE_CATE_ID',
    changeRecommnet='changeRecommnet',
    changeRanking='changeRanking'
}

const defaultState = Map({
    cate:[],
    cateId:null,
    recommnet:[],
    ranking:[]
})


export default function reducer(state = defaultState,action:any){
    switch(action.type){
        case actionTypes.CHANGE_CATE:
            return state.set('cate',action.data)
        case actionTypes.CHANGE_CATE_ID:
            return state.set('cateId',action.id)
        case actionTypes.changeRecommnet:
            return state.set('recommnet',action.data)
        case actionTypes.changeRanking:
            return state.set('ranking',action.data)
       default : 
        return state
    }
}