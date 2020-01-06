import usersReducer from '../reducers/usersReducers';
import adminReducer from '../reducers/adminReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    admins: adminReducer,
    users: usersReducer
})

export default rootReducer