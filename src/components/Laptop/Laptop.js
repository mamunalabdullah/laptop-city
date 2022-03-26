import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faShoppingCart } from "@fontawesome/free-solid-svg-icons"

import React from 'react';
import "./Laptop.css";


const Laptop = (props) => {
    const {picture, name, price} = props.laptop;

    
    return (
         
            <div className='laptop'>
                <img src={picture} alt="" />
                <h3>Model: {name}</h3>
                <p>Price: {price}</p>
                <button onClick={() => props.handleAddCart(props.laptop)} className='add-btn'>
                    <p className='btn-txt'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
                </button>
            </div>  
        
        
    );
};

export default Laptop;