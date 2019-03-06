import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fauxLogin, fetchFriends } from './actions/actions';

import Friend from './components/Friend';

class App extends Component {

  componentDidMount() {
    this.props.fauxLogin();
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Friends App</h1>
        </header>
        <section className="friends-list">
          <h2>Friends List</h2>
          {
            this.props.friendsList
            ? this.props.friendsList.map(friend =>
                <Friend {...friend} key={friend.id} />
              )
            : <p className="loading">Loading Friends!</p>
          }
        </section>
      </div>
    );
  }
}

// TODO: amend state below as needed
const mapStateToProps = state => {
  // console.log('mapStateToProps firing! state: ', state);
  return {
    friendsList: state.fetchFriends.friendsList
  }
}

// TODO: import actions below
export default connect(mapStateToProps, { fauxLogin, fetchFriends })(App);
