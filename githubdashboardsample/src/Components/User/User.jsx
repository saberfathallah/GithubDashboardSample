import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { map } from 'lodash';
import userWrapper from './UserWrapper';

const User = ({ user, className, repos, history }) => {
  const reposUser = map(repos, (rep, index) => (
    <div onClick={() => history.push(`/RepoDetails/${index}`)} key={rep.id} className="user-repos">
      <p className="user-repos_icon">....</p>
      <p key={rep.id}>{rep.name}</p>
    </div>
  ));
  return (
    <div className={className}>
      <div className="user-block">
        <img className="user-block-img" src={user.avatar_url} alt='' />
        <p>{user.login}</p>
      </div>
      {repos.length > 0 && reposUser}
  </div>
);
}

User.propTypes = {
  user: PropTypes.object,
  className: PropTypes.string,
  repos: PropTypes.array,
  history: PropTypes.object,
};

export default compose(withRouter, userWrapper)(User);