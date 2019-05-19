import axios from 'axios';
import { get } from 'lodash';
import { SEARCH_USER_SUCCESS, SEARCH_USER_FAILED, SEARCH_USER_LOADING } from './constants';

const apiUrl = 'https://api.github.com/users/';

export const searchUserSuccess = (user, repos) => {
  return {
    type : SEARCH_USER_SUCCESS,
    payload :{
      user,
      repos,
    }
  }
}

export const searchUserFailed = (error) => {
  return {
    type : SEARCH_USER_FAILED,
    payload :{
      error,
    }
  }
}

export const searchUserLoading = () => {
  return {
    type : SEARCH_USER_LOADING,
    payload :{
      isLoading: true,
    }
  }
}

export const searchUser = (login) => {
  return(dispatch) => {
     dispatch(searchUserLoading());
     axios.get(`${apiUrl}${login}`)
    .then( async(response) => {
      const data = await axios.get(response.data.repos_url);
      const repos = get(data, 'data', []);
      dispatch(searchUserSuccess(response.data, repos));
    })
    .catch(error=> { 
      dispatch(searchUserFailed(error));
      throw(error);
    });
  };
}
