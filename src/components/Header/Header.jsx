import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className="text-center fs-1 fw-bold text-success">Welcome To Book<span className="text-warning">Store</span>.com</h1>
            <p className='text-center fw-bold textDesign fs-3'>Know Thyself - Socrates </p>
            <hr></hr>
        </div>
    );
};

export default Header;