import React from 'react';

const UserOutput = props => {
    return (
        <div className='UserOutput'>
            <h5 className='username'>{ props.username }</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quod sunt dicta officia nulla voluptas eos vero. Impedit facilis tempora quisquam eveniet consequatur enim aut!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione sed modi labore quod consequuntur, recusandae nam velit animi est omnis maxime? Quisquam et incidunt molestiae nam quam, voluptate quaerat provident eum ad officia, laboriosam delectus, totam temporibus commodi magni quos! Quod quaerat sunt vero voluptatibus quisquam quis sint eos!</p>
            <p>{props.children}</p>
        </div>

    )

};

export default UserOutput;