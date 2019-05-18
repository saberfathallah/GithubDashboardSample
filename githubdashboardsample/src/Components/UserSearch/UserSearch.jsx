import React from 'react';
import userSearchWrapper from './UserSearchWrapper';

const UserSearch = ({ className }) => {
  return(
    <div className={className}>
      <div>
        <input
          placeholder="Username"
          className="userSearch-input_search"
          type="search"
        />
        <button className="userSearch-button_search">SEARCH</button>
      </div>
    </div>
  )
}

export default userSearchWrapper(UserSearch);
