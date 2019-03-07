import {
    FAILURE_FETCH_FRIENDS,
    STARTING_FETCH_FRIENDS,
    SUCCESS_FETCH_FRIENDS
} from '../actions/actions';
import { initialState } from './reducer';

const fetchFriends = (state = initialState, action) => {
    switch (action.type) {
        case STARTING_FETCH_FRIENDS:
            return {
                ...state,
                fetchingFriends: true,
                error: null
            };
        case SUCCESS_FETCH_FRIENDS:
            return {
                ...state,
                fetchingFriends: false,
                friendsList: action.payload,
                error: null
            }
        case FAILURE_FETCH_FRIENDS:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        default:
            return state;
    };
};

export default fetchFriends;