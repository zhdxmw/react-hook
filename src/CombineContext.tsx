import React, {useReducer, useEffect} from 'react'
import reducers from './contextReducer/index'

interface stateType {
    [index: string]: any;
};

const initalState: stateType = {count: 0}

export const CombineContext = React.createContext(initalState)


export const CombineProvider = (props: any) => {
    let [state, dispatch] = useReducer(reducers, initalState)

    // 初始化 reducers 中的state值到context
    // redux 中 createStore 会默认执行初始化 createContext可传入初始值 

    // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.

    //dispatch({ type: ActionTypes.INIT } as A)
    useEffect(() => {
        dispatch({type: ''})
    },[])
    
    return (
        <CombineContext.Provider value={{state, dispatch}}>
            {props.children}
        </CombineContext.Provider>
    )
}