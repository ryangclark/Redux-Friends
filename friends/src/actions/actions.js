import axiosAuth from '../axiosAuth';
import { async } from 'q';

export const ADD_FRIEND_FAILURE         = 'ADD_FRIEND_FAILURE';
export const ADD_FRIEND_STARTING        = 'ADD_FRIEND_STARTING';
export const ADD_FRIEND_SUCCESS         = 'ADD_FRIEND_SUCCESS';

export const CHANGE_RANK_ALL_SUCCESS   = 'CHANGE_RANK_ALL_SUCCESS';
export const CHANGE_RANK_FAILURE       = 'CHANGE_RANK_FAILURE';
export const CHANGE_RANK_ONE_SUCCESS   = 'CHANGE_RANK_ONE_SUCCESS';
export const CHANGE_RANK_STARTING      = 'CHANGE_RANK_STARTING';

export const FETCH_FRIENDS_FAILURE      = 'FETCH_FRIENDS_FAILURE';
export const FETCH_FRIENDS_STARTING     = 'FETCH_FRIENDS_STARTING';
export const FETCH_FRIENDS_SUCCESS      = 'FETCH_FRIENDS_SUCCESS';

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


export const updateFriendRank = friendSegment => dispatch => {
    // dispatch 'start' action
    dispatch({type: CHANGE_RANK_STARTING});
    // `put` function to be used in loop below
    const putRequest = friend => {
        return new Promise ((resolve, reject) => {
            axiosAuth()
                .put(
                    `http://localhost:5000/api/friends/${friend.id}`,
                    {rank: friend.rank}
                )
                .then(res => resolve(res))
                .catch(err => reject(dispatch({
                    type: CHANGE_RANK_FAILURE,
                    error: err
                })));
        });
    };
    // initiate loop
    async() => {
        for (let i = 0; i < friendSegment.length(); i++) {
            await putRequest(friendSegment[i])
                    .then(res => {
                        console.log('Async put: ', res);
                        if (i === friendSegment.length()) {
                            dispatch({
                                type: CHANGE_RANK_ALL_SUCCESS,
                                payload: res
                            }); 
                        }
                        return dispatch({
                            type: CHANGE_RANK_ONE_SUCCESS,
                            payload: friend.name
                        });
                    })
                    .catch(err => dispatch({
                        type: CHANGE_RANK_FAILURE,
                        error: err
                    }));
        }
        console.log('async loop done');
    }
}