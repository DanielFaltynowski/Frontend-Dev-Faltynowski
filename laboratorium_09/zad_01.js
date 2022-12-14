// VARIABLE

const n = 3



// COMMENDS

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD = 'ADD';
const SUBSTRACT = 'SUBSTRACT';
const SET = 'SET';



// STATE
const initialState = {
    value: 0
}



// ACTIONS
function increment() {
    return {
        type: INCREMENT,
    }
}
function decrement() {
    return {
        type: DECREMENT,
    }
}
function add() {
    return {
        type: ADD,
        amount: n
    }
}
function substract() {
    return {
        type: SUBSTRACT,
        amount: n
    }
}
function set() {
    return {
        type: SET,
        amount: n
    }
}



// REDUCERS
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT: return {
            ...state,
            value: state.value + 1
        }
        case DECREMENT: return {
            ...state,
            value: state.value - 1
        }
        case SET: return {
            ...state,
            value: action.amount
        }
        case ADD: return {
            ...state,
            value: state.value + action.amount
        }
        case SUBSTRACT: return {
            ...state,
            value: state.value - action.amount
        }
        default: return state
    }
}




// REDUX!!!
const redux = require('redux')

const createStore = redux.createStore

const store = createStore(reducer)
const unsubscribe = store.subscribe(() => console.log('state updated:', store.getState()))
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(add())
store.dispatch(add())
store.dispatch(substract())
store.dispatch(add())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(add())
store.dispatch(set())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(add())
unsubscribe()