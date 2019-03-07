import React from 'react';

const Friend = ({age, email, id, name}) => {
    return (
        <div className="friend">
            <h3>{name}</h3>
            <p><strong>Age:</strong> {age}</p>
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    );
};

export default Friend;