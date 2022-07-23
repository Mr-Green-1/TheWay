const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlFrXT2YtlYq7JPbi2A6FYdEVHn1nExbAGg&usqp=CAU',
            fullName: 'alex',
            status: 'boss',
            location: {city: 'New York', country: 'USA'},
            followed: false
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlFrXT2YtlYq7JPbi2A6FYdEVHn1nExbAGg&usqp=CAU',
            fullName: 'jon',
            status: 'good man',
            location: {city: 'London', country: 'England'},
            followed: true
        },
        {
            id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlFrXT2YtlYq7JPbi2A6FYdEVHn1nExbAGg&usqp=CAU',
            fullName: 'mike',
            status: 'sleep',
            location: {city: 'Berlin', country: 'German'},
            followed: false
        }
    ],
};


const userReducer = ( state = initialState, action: UsersActionType ) => {
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

export const followActionCreator = ( userId: any ) => {
    return {type: 'FOLLOW', userId} as const
};
export const unFollowActionCreator = ( userId: any ) => {
    return {type: 'UNFOLLOW', userId} as const
};
export const setUsersActionCreator = ( users: any ) => {
    return {type: 'SET_USERS', users} as const
};

export type followActionCreatorType = ReturnType<typeof followActionCreator>
export type unFollowActionCreatorType = ReturnType<typeof unFollowActionCreator>
export type setUsersActionCreatorType = ReturnType<typeof setUsersActionCreator>

export type UsersActionType = followActionCreatorType | unFollowActionCreatorType | setUsersActionCreatorType;

export default userReducer;