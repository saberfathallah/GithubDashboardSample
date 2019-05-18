import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import userWrapper from './UserWrapper';

const User = ({ user, className, repos }) => (
  <div className={className}>
    <div className="user-block">
      <img className="user-block-img" src={user.avatar_url} alt='' />
      <p>{user.login}</p>
    </div>
    {repos.length > 0 && map(repos, (rep) => <p key={rep.id}>{rep.name}</p>)}
  </div>
);

User.propTypes = {
  user: PropTypes.object,
  className: PropTypes.string,
  repos: PropTypes.array,
};

export default userWrapper(User);