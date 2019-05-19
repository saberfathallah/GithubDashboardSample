import axios from 'axios';
import { get } from 'lodash';
import { SEARCH_USER } from './constants';

const apiUrl = 'https://api.github.com/users/';

export const searchUserSuccess = (user, repos) => {
  return {
    type : SEARCH_USER,
    payload :{
      user,
      repos,
    }
  }
}

export const searchUserFailed = (error) => {
  return {
    type : SEARCH_USER,
    payload :{
      error,
    }
  }
}

export const searchUser = (login) => {
  return(dispatch) => {
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
