import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import sidebarReducer from './reducers/sidebarReducer';
import userReducer from './reducers/usersReducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer

});

export type RootReducerType = ReturnType<typeof rootReducer>

let reducersStore = createStore(rootReducer);

export default reducersStore;