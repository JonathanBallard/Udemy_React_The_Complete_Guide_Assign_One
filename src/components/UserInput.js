import React from 'react';

import './UserInput.css';

const UserInput = props => {
    return (
        <div className='input'>
            <input type='text' placeholder='input' onChange={props.change} value={props.name}></input>
            <p>{props.children}</p>
        </div>
    )


};


export default UserInput;