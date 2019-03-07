import React from 'react';

import Friend from './Friend';

const FriendsList = props => {
    return (
        <section className="friends-list">
          <h2>Friends List</h2>
          {
            props.friendsList
            ? props.friendsList.map((friend, index) =>
                <Friend {...friend} key={friend.id} rank={index + 1} />
              )
            : <p className="loading">Loading Friends!</p>
          }
        </section>
    );
};

export default FriendsList;