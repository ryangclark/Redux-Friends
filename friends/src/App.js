import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fauxLogin, fetchFriends } from './actions/actions';

import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';

class App extends Component {

  componentDidMount() {
    this.props.fauxLogin();
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="fetch-status">Status: {`${this.props.fetchingFriends}`}</p>
          <h1>Friends App</h1>
        </header>
        <div className="friends-container">
          <FriendsList friendsList={this.props.friendsList} />
          <FriendForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps firing! state: ', state);
  return {
    // fetchingFriends: state.fetchFriends.fetchingFriends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    // friendsList: state.fetchFriends.friendsList
    friendsList: state.friendsReducer.friendsList
  }
}

export default connect(mapStateToProps, { fauxLogin, fetchFriends })(App);
