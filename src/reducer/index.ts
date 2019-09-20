import { combineReducers } from 'redux'
import * as reduxHook from './reduxHook'

export default combineReducers({
            // config: (state = {}) => state,
            ...reduxHook
        })
