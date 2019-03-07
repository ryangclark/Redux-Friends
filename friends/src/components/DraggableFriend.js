import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function getItemStyle(isDragging, draggableStyle) {
    return {
        userSelect: 'none',

        // change background if dragging
        background: isDragging ? 'lightgreen' : '#eee',

        // styles from the package
        ...draggableStyle,
    };
};

const DraggableFriend = ({age, email, id, index, name, rank}) => {
    return (
        <Draggable
            draggableId={id}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    className="friend"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                >
                    <p style={{float: "right", fontSize: "0.75rem"}}>{index + 1}</p>
                    <h3>{name}</h3>
                    <p><strong>Age:</strong> {age}</p>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            )}
        </Draggable>
    );
};

export default DraggableFriend;