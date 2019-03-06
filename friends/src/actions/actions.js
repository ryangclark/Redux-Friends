import axiosAuth from '../axiosAuth';

export const FAILURE_FETCH_FRIENDS      = 'FAILURE_FETCH_FRIENDS';
export const STARTING_FETCH_FRIENDS     = 'STARTING_FETCH_FRIENDS';
export const SUCCESS_FETCH_FRIENDS      = 'SUCCESS_FETCH_FRIENDS';

export const LOGIN_SUCCESS              = 'LOGIN_SUCCESS';


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
            console.log('res.data.results: ', res.data);
            dispatch({
                type: SUCCESS_FETCH_FRIENDS,
                payload: res.data
            });
        })
        .catch(err => dispatch({type: FAILURE_FETCH_FRIENDS, payload: err}));
}