inport { createStore } from 'redux';

function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return ({counter state.counter + 1})
    }
    
    else if (action.type === 'INCREMENT') {
        return ({counter state.counter - 1})
    }
    
    else {
        return state
    }
}

const store = {
    counter = 0
}

const initialState = {counter: 0}

const actionIncrement = {type: 'INCREMENT'}
const actionDecrement = {type: 'DECREMENT'}