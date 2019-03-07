import { combineReducers } from 'redux';

import friendsReducer from './friendsReducer';

export const initialState = {
    addingFriend: false,
    error: null,
    fetchingFriends: false,
    friendsList: []
}

export default combineReducers({
    friendsReducer
});