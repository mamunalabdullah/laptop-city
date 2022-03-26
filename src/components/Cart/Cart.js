import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faDeleteLeft, faShoppingBag, faTrash } from '@fontawesome/free-solid-svg-icons';
import React from 'react';
import "./Cart.css";


const Cart = ({cart}) => {
    
    return (
        <div className="cart">
            <h1>Selected Laptops</h1>
            <div>
                {
                    cart.map((item) => (
                        <div className='item-info'>
                            <img src={item.picture} alt="" />
                            <h5 key={item.id}>{item.name}</h5>
                            <button  className='delete-btn'>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>
                        </div>
                    ))
                }
            </div>

                <div className="buttons">
                    <button className='choose-btn'>
                        <p className='txt1'>Choose one</p>
                        <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                    </button>
                    <button className='remove-btn'>
                        <p className='txt2'>Choose Again</p>
                        <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                    </button>
                </div>
        </div>
    );
};

export default Cart;