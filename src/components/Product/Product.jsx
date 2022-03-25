import React from 'react';

const Product = (props) => {
    console.log(props.product);
    const{book_name, price, image} = props.product
    return (
        <div className="col-md-4 my-3">
        <div className="card"> 
            <img src={image} className="card-img-top" alt="Product Images" />
                <div className="card-body">
                   <h5 className="card-title">bName:{" "}{book_name}</h5>
                   <p className="card-text">${price}</p>
            
                   <button  className="btn btn-primary" > Buy Now </button>
                </div>
           </div>
        </div>
    );
};

export default Product;