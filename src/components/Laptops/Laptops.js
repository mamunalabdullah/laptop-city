import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Laptop from '../Laptop/Laptop';
import "./Laptops.css";

const Laptops = () => {
    const laptops =[
        {
          "id": 1,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 50000,
          "name": "Asus X555lf"
        },
        {
          "id": 2,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 65000,
          "name": "Asus Vivobook"
        },
        {
          "id": 3,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 45000,
          "name": "Acer thunder"
        },
        {
          "id": 4,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 100000,
          "name": "Asus ROG"
        },
        {
          "id": 5,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 48000,
          "name": "HP Notebook"
        },
        {
          "id": 6,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 150000,
          "name": "Macbook"
        },
        {
          "id": 7,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 37000,
          "name": "Lenovo 35"
        },
        {
          "id": 8,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 35000,
          "name": "Walton"
        },
        {
          "id": 9,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 59000,
          "name": "HP Primio"
        },
        {
          "id": 10,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 30000,
          "name": "Wilkinson"
        },
        {
          "id": 11,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 80000,
          "name": "Lenovo"
        },
        {
          "id": 12,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 56000,
          "name": "Techno plus"
        },
        {
          "id": 13,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 97000,
          "name": "Macbook Air"
        },
        {
          "id": 14,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 43000,
          "name": "Wilkinson Page"
        },
        {
          "id": 15,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 75000,
          "name": "Asus Notebook"
        }
      ]
      const [cart, setCart] = useState([]);
      
      const handleAddCart = (laptop) =>{
        console.log("add clicked");
        const newCart = [...cart, laptop];
        setCart(newCart);
    }
    return (
        
        <div className='laptops-shop'>
            <div className="laptops">
                {
                    laptops.map(laptop => <Laptop 
                        key={laptop.id}
                        laptop={laptop}
                        handleAddCart={handleAddCart}
                    ></Laptop>)
                };
            </div>
            <div className="cart">
                <h1>cart</h1>
                <h3>selected items: {cart.length}</h3>
                <div className="buttons">
                    <button className='choose-btn'>
                        <p className='txt1'>Choose one</p>
                        <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                    </button>
                    <button className='remove-btn'>
                        <p className='txt2'>Remove</p>
                        <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Laptops;