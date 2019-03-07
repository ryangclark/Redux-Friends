import axiosAuth from '../axiosAuth';

export const FETCH_FRIENDS_FAILURE      = 'FETCH_FRIENDS_FAILURE';
export const FETCH_FRIENDS_STARTING     = 'FETCH_FRIENDS_STARTING';
export const FETCH_FRIENDS_SUCCESS      = 'FETCH_FRIENDS_SUCCESS';

export const ADD_FRIEND_FAILURE         = 'ADD_FRIEND_FAILURE';
export const ADD_FRIEND_STARTING        = 'ADD_FRIEND_STARTING';
export const ADD_FRIEND_SUCCESS         = 'ADD_FRIEND_SUCCESS';

export const LOGIN_SUCCESS              = 'LOGIN_SUCCESS';



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
    dispatch({type: FETCH_FRIENDS_STARTING});
    // initiate `fetch` call
    axiosAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({
                type: ADD_FRIEND_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => dispatch({
            type: FETCH_FRIENDS_FAILURE, 
            payload: err
        }));
};