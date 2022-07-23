const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    fullName: string
    status: string
    location: UserLocationType
    followed: boolean
}

export type UsersInitialStateType = {
    users: Array<UserType>
}

 const initialState: UsersInitialStateType = {
    users: [],
};


const userReducer = ( state: UsersInitialStateType = initialState, action: UsersActionType ): UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followActionCreator = ( userId: number ) => {
    return {type: 'FOLLOW', userId} as const
};
export const unFollowActionCreator = ( userId: number ) => {
    return {type: 'UNFOLLOW', userId} as const
};
export const setUsersActionCreator = ( users: Array<UserType> ) => {
    return {type: 'SET_USERS', users} as const
};

export type followActionCreatorType = ReturnType<typeof followActionCreator>
export type unFollowActionCreatorType = ReturnType<typeof unFollowActionCreator>
export type setUsersActionCreatorType = ReturnType<typeof setUsersActionCreator>

export type UsersActionType = followActionCreatorType | unFollowActionCreatorType | setUsersActionCreatorType;

export default userReducer;