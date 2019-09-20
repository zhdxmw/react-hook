interface stateType {
    // count: number;
    [index: string]: any;
};

type Action =
    | { type: 'USER_LIST', payload: any }
    | { type: 'USER_ADD', payload: any }
    | { type: 'USER_DELETE', payload: any }

const initalState: stateType = {
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

const UserReducer = (state: stateType = initalState, action: Action) => {
    switch (action.type){
        case "USER_LIST":
            return state;
        case "USER_ADD":
            return Object.assign({}, state, {list: action.payload});
        case "USER_DELETE":         
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}
export default UserReducer