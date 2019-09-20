import React, {useReducer, useContext} from 'react'
import {Button} from 'antd'

export interface stateType {
    // count: number;
    [index: string]: any;
};

export type Action =
    | { type: 'count.add' }
    | { type: 'count.reduce' }

const initalState: stateType = {count: 0}
const AppContext = React.createContext(initalState)

const AppReducer = (state: stateType, action: Action) => {
    switch (action.type){
        case "count.add":
            return { ...state, count: state.count + 1 };
        case "count.reduce":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}


export const AppProvider = (props: any) => {
    const [state, dispatch] = useReducer(AppReducer, initalState)

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}

export function Demo() {
    const {state, dispatch} = useContext(AppContext);
    // const [state, dispatch] = useReducer(AppReducer, initalState)
    return (
        <>
            <div>
                <Button onClick={() => dispatch({type: 'count.add'})}>add</Button>
                <span> state count : {state.count}</span>
                <Button onClick={() => dispatch({type: 'count.reduce'})}>reduce</Button>
            </div>
        </>
    )
}