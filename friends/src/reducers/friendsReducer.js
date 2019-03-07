import {
    ADD_FRIEND_FAILURE,
    ADD_FRIEND_STARTING,
    ADD_FRIEND_SUCCESS,
    FETCH_FRIENDS_FAILURE,
    FETCH_FRIENDS_STARTING,
    FETCH_FRIENDS_SUCCESS,
    CHANGE_RANK_ALL_SUCCESS,
    CHANGE_RANK_FAILURE,
    CHANGE_RANK_ONE_SUCCESS,
    CHANGE_RANK_STARTING

} from '../actions/actions';
import { initialState } from './reducer';

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND_STARTING:
            return { ...state, addingFriend: true, error: null };
        case ADD_FRIEND_SUCCESS:
            console.log('ADD_FRIEND_SUCCESS', action.payload);
            return { ...state, addingFriend: false, friendsList: action.payload, error: null };
        case ADD_FRIEND_FAILURE:
            return { ...state, addingFriend: false, error: action.payload };

        case CHANGE_RANK_STARTING:
            console.log('CHANGE_RANK_STARTING');
            return { ...state, changingRank: true};
        case CHANGE_RANK_ONE_SUCCESS:
            return console.log('Successfully Changed Rank', action.payload);
        case CHANGE_RANK_ALL_SUCCESS:
            console.log('CHANGE_RANK_ALL_SUCCESS', action.payload);
            return { ...state, changingRank: false, friendsList: action.payload, error: null };
        case CHANGE_RANK_FAILURE:
            return { ...state, changingRank: false, error: action.payload };
        
        case FETCH_FRIENDS_STARTING:
            return { ...state, fetchingFriends: true, error: null };
        case FETCH_FRIENDS_SUCCESS:
            return { ...state, fetchingFriends: false, friendsList: action.payload, error: null };
        case FETCH_FRIENDS_FAILURE:
            return { ...state, fetchingFriends: false, error: action.payload };
        
        default:
            return state;
    };
};

export default friendsReducer;