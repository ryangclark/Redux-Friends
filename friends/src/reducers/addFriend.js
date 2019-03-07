import {
    ADD_FRIEND_FAILURE,
    ADD_FRIEND_STARTING,
    ADD_FRIEND_SUCCESS
} from '../actions/actions';
import { initialState } from './reducer';

const addFriend = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FRIEND_STARTING:
            return {
                ...state,
                addingFriend: true,
                error: null
            };
        case ADD_FRIEND_SUCCESS:
            console.log('ADD_FRIEND_SUCCESS', action.payload);
            return {
                ...state,
                addingFriend: false,
                friendList: action.payload,
                error: null
            };
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                addingFriend: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default addFriend;