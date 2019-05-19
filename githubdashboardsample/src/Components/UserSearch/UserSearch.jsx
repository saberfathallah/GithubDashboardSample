import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import userSearchWrapper from './UserSearchWrapper';
import User from '../User';
import { searchUser } from './actions';

class UserSearch extends Component {

  handleChange = async (event) => {
    const { searchUser } = this.props;
    if (event.target.value) {
      await searchUser(event.target.value);
    }
  }

  render() {
    const { className, user, repos, errorSearch } = this.props;
    return(
      <div className={className}>
        <div className="user-search">
          <input
            placeholder="Username"
            className="userSearch-input_search"
            type="search"
            onChange={(e) => this.handleChange(e)}
          />
          <button className="userSearch-button_search">SEARCH</button>
        </div>
        {!errorSearch ? <User user={user} repos={repos} /> : <p>error try again</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    repos: state.userReducer.repos,
    errorSearch: state.userReducer.error,
  };
}

const mapDispatchToProps = (dispatch) => ({
  searchUser: (login) => {
    dispatch(searchUser(login));
  },
});

UserSearch.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  repos: PropTypes.array,
};

export default compose(connect(mapStateToProps,mapDispatchToProps), userSearchWrapper)(UserSearch);
