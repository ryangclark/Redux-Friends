import React from 'react';

const Friend = ({age, email, id, name, rank}) => {
    return (
        <div className="friend">
            <p style={{float: "right", fontSize: "0.75rem"}}>{rank}</p>
            <h3>{name}</h3>
            <p><strong>Age:</strong> {age}</p>
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    );
};

export default Friend;