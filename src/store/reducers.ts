import {combineReducers} from 'redux-immutable'

import recommend from '@/pages/discover/components/recommend/store'
import ranking from '@/pages/discover/components/ranking/store'
import songs from '@/pages/discover/components/songs/store'
import play from '@/pages/player/store'
import djradio from '@/pages/discover/components/djradio/store'

export default combineReducers({
    recommend,
    ranking,
    play,
    songs,
    djradio
})