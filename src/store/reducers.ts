import {combineReducers} from 'redux-immutable'

import recommend from '@/pages/discover/components/recommend/store'
import ranking from '@/pages/discover/components/ranking/store'
import songs from '@/pages/discover/components/songs/store'
import play from '@/pages/player/store'

export default combineReducers({
    recommend,
    ranking,
    play,
    songs
})