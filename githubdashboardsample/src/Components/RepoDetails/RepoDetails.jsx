import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RepoDetails = ({ match : { params : { index } }, repos, user }) => {
  if (!user.id) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ boxShadow: 'inset 0 0 1em #e6e5df, 0 0 2em #ffffff', paddingBottom: '20px' }}>
      <img style={{ display: 'inline-block', width: '50px', height: '50px', borderRadius: '50%', marginRight: '5px' }} src={user.avatar_url} alt='' />
      <div style={{ display: 'inline-block' }}>
        <p>{user.login}</p>
        <p>{user.url}</p>
      </div>
      <p>{repos[index].name}</p>
      <p>{repos[index].language}</p>
      <p>{repos[index].stargazers_count}</p>
      <p>{repos[index].description}</p>
      <p>{repos[index].updated_at}</p>
      <a href='https://github.com'>https://github.com</a>
    </div>
  );
}

const mapStateToProps = (state) => ({
  repos: state.userReducer.repos,
  user: state.userReducer.user,
});

RepoDetails.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  repos: PropTypes.array,
  user: PropTypes.object,
};

export default connect(mapStateToProps, null)(RepoDetails);
