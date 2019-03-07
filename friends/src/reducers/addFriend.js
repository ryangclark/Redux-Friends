import {
    ADD_FRIEND_FAILURE,
    ADD_FRIEND_STARTING,
    ADD_FRIEND_SUCCESS
} from '../actions/actions';

const addFriend = (state = [], action) => {
    switch(action.type) {
        case ADD_FRIEND_STARTING:
            return {
                ...state,
                addingFriend: true,
                error: null
            };
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                friendList: action.payload,
                error: null
            };
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    };
};

export default addFriend;