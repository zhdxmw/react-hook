import { createStore } from 'redux';
import createRootReducer from '../reducer'

export default function configureStore(state: any = {}) {
    const store = createStore(
        createRootReducer,
        state,
    )

    return store
}