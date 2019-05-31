import axios from 'axios';
import { get } from 'lodash';
import { SEARCH_USER_SUCCESS, SEARCH_USER_FAILED, SEARCH_USER_LOADING, ADD_EVENT } from './constants';

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

export const addEvent = (type, selector) => {
  return {
    type : ADD_EVENT,
    payload :{
      type,
      selector,
    }
  }
}

export const dispatchEventA = (type, selector) => {
  return(dispatch) => {
     dispatch(() => {
      let evt;
      const element = document.querySelector(`#${selector}`);

      if (!element) {
        return null;
      }
      // Add switch for futur usage different than MouseEvent ;)
      switch (type) {
        case 'click':
        case 'dblclick':
        case 'mouseup':
        case 'mousedown':
          evt = new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            view: window,
          });
          break;
        default:
          evt = null;
          break;
      }

      if (evt) {
        element.dispatchEvent(evt);
      }
     });
  };
}
