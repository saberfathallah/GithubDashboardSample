import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RepoDetails = ({ match : { params : { index } }, repos, user}) => {
  if (!user.id) {
    return <Redirect to="/" />;
  } 
  return (
    <div>
      <div className="user-block">
        <img className="user-block-img" src={user.avatar_url} alt='' />
        <p>{user.login}</p>
      </div>
      <p>{repos[index].name}</p>
      <p>{repos[index].description}</p>
      <p>{repos[index].language}</p>
      <p>{repos[index].stargazers_count}</p>
      <p>{repos[index].updated_at}</p>
      <p>{repos[index].url}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    repos: state.userReducer.repos,
    user: state.userReducer.user,
  };
}

RepoDetails.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  repos: PropTypes.array,
  user: PropTypes.object,
};

export default connect(mapStateToProps, null)(RepoDetails);
