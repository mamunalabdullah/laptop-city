import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import React from 'react';
import "./Laptop.css";


const Laptop = (props) => {
    const {picture, name, price, id} = props.laptop;

    
    return (
         
            <div className='laptop'>
                <img src={picture} alt="" />
                <h3 key={id}>Model: {name}</h3>
                <p>Price: {price}</p>
                <button onClick={() => props.handleAddCart(props.laptop)} className='add-btn'>
                    <p className='btn-txt'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
                </button>
            </div>  
        
        
    );
};

export default Laptop;