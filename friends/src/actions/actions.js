import axios from 'axios';

export const FAILURE_FETCH_FRIENDS      = 'FAILURE_FETCH_FRIENDS';
export const STARTING_FETCH_FRIENDS     = 'STARTING_FETCH_FRIENDS';
export const SUCCESS_FETCH_FRIENDS      = 'SUCCESS_FETCH_FRIENDS';

export const fetchFriends = () => dispatch => {
    // dispatch `start` action
    dispatch({type: STARTING_FETCH_FRIENDS});
    // initiate `fetch` call
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({
                type: SUCCESS_FETCH_FRIENDS,
                payload: res.data.results
            });
        })
        .catch(err => dispatch({type: FAILURE_FETCH_FRIENDS, payload: err}));
}