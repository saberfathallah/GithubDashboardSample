import { SEARCH_USER_SUCCESS, SEARCH_USER_FAILED, SEARCH_USER_LOADING } from './constants';

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

    default:
      return state;
  }
}

export default userReducer;
