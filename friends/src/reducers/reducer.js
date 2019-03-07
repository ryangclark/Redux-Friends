import { combineReducers } from 'redux';

import addFriend from './addFriend';
import fetchFriends from './fetchFriends';

export default combineReducers({
    addFriend,
    fetchFriends
});