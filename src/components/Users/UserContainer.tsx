import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {
    followActionCreator, setUsersActionCreator,
    unFollowActionCreator,
    UsersActionType
} from '../Redux/reducers/usersReducer';
import {RootReducerType} from '../Redux/reduxStore';


let mapStateToProps = ( state: RootReducerType ) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = ( action: UsersActionType ) => {
    return {
        follow: ( userId: any ) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: ( userId: any ) => {
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: ( users: any ) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);