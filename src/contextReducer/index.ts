import UserReducer from './UserInfo'
import CountReducer from './CountReducer'

// 实现简单的combineReducer 省略各种判断。
const combineReducer = (reducers:any) => {
    return (state:any = {}, action: any) => {        
        return Object.keys(reducers).reduce((nextState:any, key:any) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        },{})
    }
}

const reducers = combineReducer({
    UserReducer,
    CountReducer
})

export default reducers