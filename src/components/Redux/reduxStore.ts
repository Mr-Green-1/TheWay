import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import userReducer from './reducers/usersReducer';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    //sidebar: sidebarReducer,
    usersPage: userReducer

});

export type RootReducerType = ReturnType<typeof rootReducer>;

export const reducersStore = createStore(rootReducer);