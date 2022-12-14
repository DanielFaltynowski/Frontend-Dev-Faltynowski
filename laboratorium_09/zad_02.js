// Actions
const setCurrentJedi = () => {
    return {
        type: 'SET_CURRENT_JEDI'
    }
}

const setJob = () => {
    return {
        type: 'SET_JOB',
        job: 'ug space teacher'
    }
}

const finishTraining = () => {
    return {
        type: 'FINISH_TRAINING',
        job: 'Jedi Knight',
        lightsaber: 'blue'
    }
}

const joinDarkSide = () => {
    return {
        type: 'JOIN_DARK_SIDE',
        job: 'Sith',
        side: 'dark',
        lightsaber: 'red'
    }

}


// State
const lukeState = {
    firstName : "Luke",
    lastName : "Skywalker",
    job : "moisture farmer",
    side : "light",
    weapons: {
        blaster : "DL-42"
    }
};



// Reducer
const reducer = (state = lukeState, action) => {
    switch(action.type) {
        case 'SET_CURRENT_JEDI': return action.payload
        case 'SET_JOB': return {
            ...state,
            job: action.job
        }
        case 'FINISH_TRAINING': return {
            ...state,
            job: action.job,
            weapons: {
                ...state.weapons,
                lightsaber: action.lightsaber
            }
        }
        case 'JOIN_DARK_SIDE': return {
            ...state,
            job: action.job,
            side: action.side,
            weapons: {
                ...state.weapons,
                lightsaber: action.lightsaber
            }
        }
        default: return state
    }
}




// REDUX
const redux = require('redux')
const createStore = redux.createStore

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(setCurrentJedi())
store.dispatch(setJob())
store.dispatch(finishTraining())
store.dispatch(joinDarkSide())
store.dispatch({type: 'elo pomelo'})
unsubscribe()
