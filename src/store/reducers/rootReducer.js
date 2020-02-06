import usersReducer from '../reducers/usersReducers';
import musicReducer from '../reducers/musicReducer'
import videoReducer from '../reducers/videoReducer'
import lyricReducer from '../reducers/lyricReducer'
import postsReducer from '../reducers/postsReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    users: usersReducer,
    music: musicReducer,
    video: videoReducer,
    lyric: lyricReducer,
    posts: postsReducer,

})

export default rootReducer