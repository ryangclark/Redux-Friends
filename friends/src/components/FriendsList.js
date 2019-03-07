import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import DraggableFriend from './DraggableFriend';

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
    this.state.items,
    result.source.index,
    result.destination.index
  );

  this.setState({
    items,
  });
};

const FriendsList = props => {
    return (
        <section className="friends-list-container">
          <h2>Friends List</h2>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshop) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {
                    props.friendsList
                    ? props.friendsList.map((friend, index) =>
                        <DraggableFriend
                          {...friend}
                          draggableId={friend.id}
                          key={friend.id}
                          index={index}
                        />
                      )
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