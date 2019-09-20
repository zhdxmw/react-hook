interface stateType {
    // count: number;
    [index: string]: any;
};

type Action =
    | { type: 'count.add' }
    | { type: 'count.reduce' }

const initalState: stateType = {count: 0}

const CountReducer = (state: stateType = initalState, action: Action) => {
    switch (action.type){
        case "count.add":
            return { ...state, count: state.count + 1 };
        case "count.reduce":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}
export default CountReducer