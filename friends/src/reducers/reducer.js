import { combineReducers } from 'redux';

import addFriend from './addFriend';
import fetchFriends from './fetchFriends';
import friendsReducer from './friendsReducer';

export const initialState = {
    addingFriend: false,
    error: null,
    fetchingFriends: false,
    friendsList: []
}

export default combineReducers({
    // addFriend,
    // fetchFriends
    friendsReducer
});