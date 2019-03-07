import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import DraggableFriend from './DraggableFriend';

import { updateFriendRank } from '../actions/actions';


// conditional styling for the list area
function getListStyle(isDraggingOver) {
  return {
    background: isDraggingOver ? 'lightblue' : 'lightgray',
  };
};

const FriendsList = props => {
  // state
  const [dragFriendList, setDragFriendList] = useState();
  
  // update the state when props.friendsList changes
  // this might impact order of items when updates come in
  useEffect(
    () => {
      let sortArray = props.friendsList;
      setDragFriendList(sortArray.sort(
        // compares the `rank` of each object in friendsList
        (a, b) => a.rank - b.rank
      ));
    },
    [props.friendsList]
  );

  // handles re-ordering the list after drop
  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      dragFriendList,
      result.source.index,
      result.destination.index
    );
    const slicered = items.slice(
      0,
      result.source.index > result.destination.index
        ? result.source.index
        : result.destination.index
    );
    // setDragFriendList(items);
    console.log('slicered', slicered);
    updateFriendRank(slicered);
  };
  
  return (
    <section className="friends-list-container">
      <h2>Friends List</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {
                dragFriendList //check for friendsList
                ? <>
                    {dragFriendList.map((friend, index) =>
                        <DraggableFriend
                          {...friend}
                          key={friend.id}
                          index={index}
                        />
                      )
                    }
                    {provided.placeholder}
                  </>
                // if no friendsList, show loading message
                : <p className="loading">Loading Friends!</p>
              }
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
    );
};

export default FriendsList;