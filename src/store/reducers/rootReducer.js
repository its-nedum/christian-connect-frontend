import usersReducer from '../reducers/usersReducers';
import adminReducer from '../reducers/adminReducer';
import musicReducer from '../reducers/musicReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    admins: adminReducer,
    users: usersReducer,
    music: musicReducer
})

export default rootReducer