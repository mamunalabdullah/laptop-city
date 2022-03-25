import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import React from 'react';
import "./Laptop.css";


const Laptop = (props) => {
    const {picture, name, price} = props.laptop;

    const handleAddCart = () =>{
        console.log("add clicked");
    }
    return (
         
            <div className='laptop'>
                <img src={picture} alt="" />
                <h3>Model: {name}</h3>
                <p>Price: {price}</p>
                <button onClick={handleAddCart} className='cart-btn'>
                    <p className='btn-txt'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
                </button>
            </div>  
        
        
    );
};

export default Laptop;