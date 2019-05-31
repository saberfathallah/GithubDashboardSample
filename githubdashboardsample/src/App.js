import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import UserSearch from './Components/UserSearch';
import RepoDetails from './Components/RepoDetails'
import { dispatchEventA } from './Components/UserSearch/actions';

class App extends React.Component {
  render() {
    const { type, selector, dispatchEventA } = this.props;
  return (
    <div className="App">
      <Header />
      <Switch> 
        <Route exact path='/' component={UserSearch}/>
        <Route exact path='/RepoDetails/:index' component={withRouter(RepoDetails)}/>
      </Switch>
      <button onClick={() => dispatchEventA(type, selector)} >to test 2</button>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  type: state.userReducer.type,
  selector: state.userReducer.selector,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchEventA: (type, selector) => {
    dispatch(dispatchEventA(type, selector));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
