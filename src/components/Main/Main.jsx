import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Main = () => {
    const[products, setProduct] = useState([])
    const[cart, setCart] = useState([])

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const orderHandler = (product) =>{
           // console.log('clicked for buy', product);
                // console.log('clicked',product);
                const newCart = [...cart, product]
                setCart(newCart)
    }


    return (
        <div className='main-container row d-flex justify-content-around'>
        <div className="all--products col-md-8">
            <div className='row'>
                    {
                        products.map(product => <Product 
                            key={product.id} product={product}
                            orderHandler={orderHandler}
                            ></Product>)
                    }
            </div>
        </div>
        <div className="order-summary align-items-center col-md-4 bg-dark text-white h-50 mt-5 sticky-top ">
           <h1>Order Summary</h1>
            <Cart cart={cart}></Cart>
        </div>
    </div>
    );
};

export default Main;