// states
const state1 = {
    users : [],
    currentUser : "Gosia"
}

const state2 = {
    users : [],
    currentUser : "Daniel"
}

const state3 = {
    users : [],
    currentUser : "Honorata"
}

// actions
const update = () => {
    return {
        type: 'UPDATE'
    }
}

// reducer
const reducer1 = (state = state1, action) => {
    switch (action.type) {
        case 'UPDATE': {
            const newUsers = [...state.users, state.currentUser]
            return {
                ...state,
                users: newUsers
            }
        }
        default: return state
    }
}
const reducer2 = (state = state2, action) => {
    switch (action.type) {
        case 'UPDATE': {
            const newUsers = [...state.users, state.currentUser]
            return {
                ...state,
                users: newUsers
            }
        }
        default: return state
    }
}
const reducer3 = (state = state3, action) => {
    switch (action.type) {
        case 'UPDATE': {
            const newUsers = [...state.users, state.currentUser]
            return {
                ...state,
                users: newUsers
            }
        }
        default: return state
    }
}

const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const rootReducer = combineReducers({
    reducer1, reducer2, reducer3
})

const store = createStore(rootReducer)
const unsubscribe = store.subscribe(() => console.log('State updated:', store.getState()))
store.dispatch(update())
unsubscribe()
