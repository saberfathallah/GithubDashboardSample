import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import userSearchWrapper from './UserSearchWrapper';
import User from '../User';
import { searchUser } from './actions';

class UserSearch extends Component {

  state= {
    searchValue: '',
    searchValueError: '',
  }

  handleChange = event => {
    this.setState({
      searchValue: event.target.value,
    })
  };

  search = async () => {
    const { searchUser } = this.props;
    const { searchValue } = this.state;
    this.setState({ searchValueError: '' })
    if (searchValue) {
      await searchUser(searchValue);
    } else {
      this.setState({ searchValueError: 'empty input' })
    }
  }

  render() {
    const { className, user, repos, errorSearch, isLoading } = this.props;
    const { searchValueError } = this.state;
    return(
      <div className={className}>
        <div className="user-search">
          <input
            placeholder="Username"
            className="userSearch-input_search"
            type="search"
            value={this.state.searchValue}
            onChange={(e) => this.handleChange(e)}
          />
          <button onClick={this.search} className="userSearch-button_search">SEARCH</button>
        </div>
        {isLoading ? <p>loading....</p> : searchValueError.length === 0 ? 
          (!errorSearch) ? <User user={user} repos={repos} /> : <p>error try again</p> : <p>{searchValueError}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    repos: state.userReducer.repos,
    errorSearch: state.userReducer.error,
    isLoading: state.userReducer.isLoading,
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
  isLoading: PropTypes.bool,
};

export default compose(connect(mapStateToProps,mapDispatchToProps), userSearchWrapper)(UserSearch);
