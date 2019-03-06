import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFriends } from './actions/actions';

import Friend from './components/Friend';

class App extends Component {

  componentDidMount() {
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
            this.state.friendsList.map(friend => 
              <Friend friend={friend} key={friend.id} />
            )
          }
        </section>
      </div>
    );
  }
}

// TODO: amend state below as needed
const mapStateToProps = storeState => {
  return {
    friendsList: storeState.friendsList
  }
}

// TODO: import actions below
export default connect(mapStateToProps, { fetchFriends })(App);
