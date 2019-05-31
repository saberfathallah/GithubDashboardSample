import { SEARCH_USER_SUCCESS, SEARCH_USER_FAILED, SEARCH_USER_LOADING, ADD_EVENT, DISPASH_EVENT } from './constants';

const initialState = {
  user: {},
  repos: [],
  error: false,
  isLoading: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    
    case SEARCH_USER_SUCCESS:
      return { user: action.payload.user, repos: action.payload.repos, isLoading: false };  

    case SEARCH_USER_FAILED:
      return { ...state, error: action.payload.error, isLoading: false };  
    
    case SEARCH_USER_LOADING:
      return { ...state, isLoading: action.payload.isLoading };  
    
      case ADD_EVENT:
        return { ...state, selector: action.payload.selector, type: action.payload.type, isLoading: false };
        case DISPASH_EVENT:
          return { ...state, isLoading: false };   

    default:
      return state;
  }
}

export default userReducer;
