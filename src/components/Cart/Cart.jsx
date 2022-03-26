import React from 'react';
import Details from '../Details/Details';

const Cart = ({cart}) => {
    //console.log(cart);

 let names = []
 for(const product of cart){
    names.push(product)
 }

console.log(names.length);

    return (
        <div>
            <h1>Qty: {cart.length}</h1>
            
               {
                names.map(pd =><Details key= {pd.id } details={pd}></Details>)
              }
                  
           <button  className='btn btn-primary m-3'>Choose One for Me</button>
          
           <button  className='btn btn-danger'>Remove All</button>
        </div>
    );
};

export default Cart;