import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import UserSearch from './Components/UserSearch';
import RepoDetails from './Components/RepoDetails'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch> 
        <Route exact path='/' component={UserSearch}/>
        <Route exact path='/RepoDetails/:index' component={withRouter(RepoDetails)}/>
      </Switch> 
    </div>
  );
}

export default App;
