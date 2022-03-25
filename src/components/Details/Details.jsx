import React from 'react';
import './Details.css'
const Details = (props) => {
    const{ image, book_name} = props.details
    return (
        <div className='smallImage'>
            <img src={image} alt="cartImages" />
            {book_name}
            <i class="fa-solid fa-trash-can iconF"></i>
        </div>
    );
};

export default Details;