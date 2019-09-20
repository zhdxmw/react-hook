import { ADD_COUNT, REDUCE_COUNT, DEAL_LIST } from '../action/reduxHook'

interface User {
    name: string;
    desc: string;
}
export interface StateType {
    count: number;
    list: User[];
}

const initState = {
    count: 0,
    list: [
        {
            name: '用户一',
            desc: '用户一用户一用户一'
        },
        {
            name: '二傻子',
            desc: '二傻子二傻子'
        },
        {
            name: '发的说法',
            desc: '发的是更好范德萨安徽发的是更好范德萨安徽'
        }
    ]
}

export const reduxState = (state = initState, action: any) => {
    switch (action.type) {
        case ADD_COUNT: 
            return { ...state, count: state.count + 1 };
        case REDUCE_COUNT:
            return { ...state, count: state.count - 1 };
        case DEAL_LIST: 
            return Object.assign({}, state, {list: action.payload});
        default: 
            return state
    }
}