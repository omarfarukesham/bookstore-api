import React from 'react';
import Details from '../Details/Details';

const Cart = ({cart}) => {
 //console.log(cart)

 let names = []
 for(const product of cart){
     if(names.length <= 3){
        names.push(product)
     }else{
        //  alert('Only 4 Product you can Buy')
     }
 }
//  const randCount = (item) =>{
//     console.log(item)
//     // var item = item[Math.ceil(Math.random() * item.length)];
//    var item = item[Math.floor((Math.random()*item.length))];
//     console.log(item)
//     names.push(item)

// }

const cartLength = cart.length

    return (
        <div>
            <h3>Qty: {cartLength }</h3>
            
               {
                names.map(pd =><Details key= {pd.id } details={pd}></Details>)
              }
            
          
        </div>
    );
};


export default Cart;