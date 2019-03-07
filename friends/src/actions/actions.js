import axiosAuth from '../axiosAuth';

export const FAILURE_FETCH_FRIENDS      = 'FAILURE_FETCH_FRIENDS';
export const STARTING_FETCH_FRIENDS     = 'STARTING_FETCH_FRIENDS';
export const SUCCESS_FETCH_FRIENDS      = 'SUCCESS_FETCH_FRIENDS';

export const ADD_FRIEND_FAILURE         = 'ADD_FRIEND_FAILURE';
export const ADD_FRIEND_STARTING        = 'ADD_FRIEND_STARTING';
export const ADD_FRIEND_SUCCESS         = 'ADD_FRIEND_SUCCESS';

export const LOGIN_SUCCESS              = 'LOGIN_SUCCESS';


// add a friend
export const addFriend = (age, email, friendName) => dispatch => {
    // dispatch `START` action
    dispatch({type: ADD_FRIEND_STARTING});
    // fire axios call
    axiosAuth()
        .post(
            'http://localhost:5000/api/friends',
            {age: age, email: email, name: friendName}
        )
        .then(res => dispatch({
                 type: ADD_FRIEND_SUCCESS,
                 payload: res.data
        }))
        .catch(err => dispatch({
            type: ADD_FRIEND_FAILURE,
            payload: err
        }))
};

// action to assign the fake login token to local storage
export const addTokenToLocalStorage = store => next=> action => {
    if (action.type === LOGIN_SUCCESS) {
        localStorage.setItem('userToken', action.payload);
    }
    next(action);
};

// action to the fake login, so we can set the auth token to local storage
export const fauxLogin = () => dispatch => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: 'eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ'
    });
};


export const fetchFriends = () => dispatch => {
    // dispatch `start` action
    dispatch({type: STARTING_FETCH_FRIENDS});
    // initiate `fetch` call
    axiosAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({
                type: SUCCESS_FETCH_FRIENDS,
                payload: res.data
            });
        })
        .catch(err => dispatch({
            type: FAILURE_FETCH_FRIENDS, 
            payload: err
        }));
};