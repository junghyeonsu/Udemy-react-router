import { FETCH_POSTS , FETCH_POST } from '../actions/index';

// 초기값
const initial_state = { all : [] , post : null }; 

export default function(state = initial_state, action) {
    switch(action.type) {
        case FETCH_POSTS :   
            return { ...state, all : action.payload.data};

        case FETCH_POST :
            return { ...state, post : action.payload.data};

        default :
        return state;
    }
}