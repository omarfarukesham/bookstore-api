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

    return (
        <div>
           
               {
                names.map(pd =><Details key= {pd.id } details={pd}></Details>)
              }
              
        </div>
    );
};


export default Cart;