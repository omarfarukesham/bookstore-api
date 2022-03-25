import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);

 let names = []
 for(const product of cart){
     //console.log(product)
        let getName = product.book_name
        names.push(getName)
        console.log(getName)

 }


 console.log(names);

    return (
        <div>
            <h1>Qty: {cart.length}</h1>
            {
                names.map(bname =><p>{bname}</p>)
            }
           
        </div>
    );
};

export default Cart;