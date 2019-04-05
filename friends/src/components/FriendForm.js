import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions/actions';

const FriendForm = ({ dispatch }) => {
    let ageInput;
    let emailInput;
    let formElement;
    let nameInput;

    return (
        <form
            className="friend-form"
            onSubmit={event => {
                event.preventDefault();
                // dispatch the `addFriend()` action
                dispatch(addFriend(
                    // pass in form values
                    ageInput.value,
                    emailInput.value,
                    nameInput.value
                ));
                // reset the form
                formElement.reset();
            }}
            ref={node => formElement = node}
        >
            <label>
                Name:<br></br>
                <input 
                    name="name"
                    ref={node => nameInput = node}
                    required
                    type="text"
                /><br></br>
            </label>
            <label>
                Age:<br></br>
                <input 
                    name="age"
                    ref={node => (ageInput = node)}
                    required
                    type="number"
                /><br></br>
            </label>
            <label>
                Email:<br></br>
                <input 
                    name="email"
                    ref={node => emailInput = node}
                    required
                    type="email"
                /><br></br>
            </label>
            <button type="submit">Add Friend</button>
        </form>
    );
};

export default connect()(FriendForm);