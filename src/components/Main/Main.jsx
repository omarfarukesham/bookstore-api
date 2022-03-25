import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Main = () => {
    const[products, setProduct] = useState([])

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='main-container row d-flex justify-content-around'>
        <div className="all--products col-md-8">
            <div className='row'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
            </div>
        </div>
        <div className="order-summary align-items-center col-md-4 bg-dark text-white h-50 mt-5 sticky-top ">
           <h1>Order Summary</h1>
        </div>
    </div>
    );
};

export default Main;