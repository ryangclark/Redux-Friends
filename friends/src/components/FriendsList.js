import React from 'react';

import Friend from './Friend';

const FriendsList = props => {
    return (
        <section className="friends-list">
          <h2>Friends List</h2>
          {
            props.friendsList
            ? props.friendsList.map(friend =>
                <Friend {...friend} key={friend.id} />
              )
            : <p className="loading">Loading Friends!</p>
          }
        </section>
    );
};

export default FriendsList;