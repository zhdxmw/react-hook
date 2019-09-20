export const ADD_COUNT = 'ADD_COUNT'
export const REDUCE_COUNT = 'REDUCE_COUNT'
export const DEAL_LIST = 'DEAL_LIST'

export const addCount = () => {
    return { 
        type: ADD_COUNT
    }
}

export const reduceCount = () => {
    return {
         type: REDUCE_COUNT
    }
}

export const dealList = (params: any) => {
    return {
        type: DEAL_LIST,
        payload: params
    }
}