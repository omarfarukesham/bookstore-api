import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Main = () => {
    const[products, setProduct] = useState([])
    const[cart, setCart] = useState([])

    const [randCart, setRandcart] =useState([])

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

    const randId = []
    for(const getProduct of cart){
            randId.push(getProduct.book_name)
    }

    const randCount = (item) =>{
       
    //    setCart([
    //      ...cart.splice(0, item.length),   
    //     // cart.splice(0, item.length)    
    //   ]);

    //   console.log(cart);

         var randItem = item[Math.floor((Math.random()*item.length))];

        setRandcart(randItem)
     
     
       
    }
    const removeItem = (item) =>{
       
        setCart([
         ...cart.splice(0, item.length),   
      ]);

      console.log('remove item', item);
      
    }
// console.log(randCart);
    
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
           <h2>Order Summary</h2>
            <h3 className='text-warning'>Random Choice {randCart}</h3>
            <Cart cart={cart} randCart={randCart} ></Cart>
            <button onClick={() => randCount(randId)} className='btn btn-primary m-3'>Choose One for Me</button>
            <button onClick={()=> removeItem(cart)} className='btn btn-danger'>Remove All</button>
        </div>
    </div>
    );
};

export default Main;