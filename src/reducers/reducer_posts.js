import { FETCH_POSTS } from '../actions/index';

// 초기값
const initial_state = { all : [] , post : null }; 

export default function(state = initial_state, action) {
    switch(action.type) {
        case FETCH_POSTS :
        console.log(action.payload.data);  
        
        return { 
              ...state,
             all : action.payload.data
          };

        default :
        return state;
    }
}