import {Users} from './Users';
import {connect} from 'react-redux';
import {
    followActionCreator,
    setUsersActionCreator,
    unFollowActionCreator,
    UsersInitialStateType,
    UserType
} from '../Redux/reducers/usersReducer';
import {RootReducerType} from '../Redux/reduxStore';
import {compose, Dispatch} from 'redux';
import {FC} from 'react';


type mapStateToPropsType = {
    users: UsersInitialStateType
}

type mapDispatchToPropsType = {
    follow: ( userId: number ) => void
    unfollow: ( userId: number ) => void
    setUsers: (users: Array<UserType>) => void
}

export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = ( state: RootReducerType ): mapStateToPropsType => {
    return {
        users: state.usersPage
    }
}

let mapDispatchToProps = ( dispatch: Dispatch ): mapDispatchToPropsType => {
    return {
        follow: ( userId: number ) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: ( userId: number ) => {
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: ( users: Array<UserType> ) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps))(Users);