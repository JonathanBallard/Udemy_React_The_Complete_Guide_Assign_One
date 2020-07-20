import React from 'react';

const UserInput = props => {
    return (
        <div className='UserInput'>
            <input type='text' placeholder='input' onChange={props.change} value={props.name}></input>
            <p>{props.children}</p>
        </div>
    )


};


export default UserInput;