import { createStore } from 'redux';

const initialState = {counter: 0}

function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return ({counter: state.counter + 1})
    }
    else if (action.type === 'DECREMENT') {
        return ({counter: state.counter - 1})
    }
    else {
        return state
    }
}

const store = createStore(reducer, initialState)

export default store