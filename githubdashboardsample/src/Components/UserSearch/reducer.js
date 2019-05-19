import { SEARCH_USER } from './constants';

const initialState = {
  user: {},
  repos: [],
  error: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    
    case SEARCH_USER:
    return { user: action.payload.user, repos: action.payload.repos, error: action.payload.error };  

    default:
      return state;
  }
}

export default userReducer;
