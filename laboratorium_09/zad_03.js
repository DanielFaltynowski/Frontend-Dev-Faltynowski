const initialState = {
    users: []
}

const addUser1 = () => {
    return {
        type: 'ADD_USER',
        user: {
            username : "mmiotk",
            firstName : "Mateusz",
            lastName : "Miotk",
            favoriteColor : "red"
        }
    }
}
const addUser2 = () => {
    return {
        type: 'ADD_USER',
        user: {
            username : "daphalxe",
            firstName : "Daniel",
            lastName : "Faltynowski",
            favoriteColor : "yellow"
        }
    }
}

const removeUser = () => {
    return {
        type: 'REMOVE_USER',
        username: 'mmiotk'
    }
}

const updateUser = () => {
    return {
        type: 'UPDATE_USER',
        username: 'daphalxe',
        updateUser: 'faltynowskyy'
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            const newListAdd = [...state.users]
            newListAdd.push(action.user)
            return {
                users: newListAdd
            }
        case 'REMOVE_USER':
            const newListRem = state.users.filter(elem => elem.username !== action.username)
            return {
                users: newListRem
            }
        case 'UPDATE_USER':
            const newObject = state.users.find(elem => elem.username === action.username)
            const newListRem2 = state.users.filter(elem => elem.username !== action.username)
            newObject.username = action.updateUser
            return {
                users: [...newListRem2, newObject]
            }
        default: return state
    }
}


const redux = require('redux')
const createStore = redux.createStore

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => console.log('Current state:', store.getState()))

store.dispatch(addUser1())
store.dispatch(addUser2())
store.dispatch(removeUser())
store.dispatch(updateUser())