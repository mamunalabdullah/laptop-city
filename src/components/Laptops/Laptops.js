import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import "./Laptops.css";

const Laptops = () => {

  // fake data 
    const laptops =[
        {
          "id": 1,
          "picture": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
          "price": 50000,
          "name": "Asus X555lf"
        },
        {
          "id": 2,
          "picture": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80",
          "price": 65000,
          "name": "Asus Vivobook"
        },
        {
          "id": 3,
          "picture": "https://media.istockphoto.com/photos/modern-computerlaptop-with-blank-screen-on-counter-barand-window-view-picture-id1157789866?k=20&m=1157789866&s=612x612&w=0&h=1txTQ36VQ8Wc4N2AwrLwMQ9Llb9mleL8FVzQj_apU3E=",
          "price": 45000,
          "name": "Acer thunder"
        },
        {
          "id": 4,
          "picture": "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80",
          "price": 100000,
          "name": "Asus ROG"
        },
        {
          "id": 5,
          "picture": "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901__340.jpg",
          "price": 48000,
          "name": "HP Notebook"
        },
        {
          "id": 6,
          "picture": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
          "price": 150000,
          "name": "Macbook"
        },
        {
          "id": 7,
          "picture": "https://cdn.mos.cms.futurecdn.net/q3NVYX9QB7AUY3WE483VoY-1200-80.jpg",
          "price": 37000,
          "name": "Lenovo 35"
        },
        {
          "id": 8,
          "picture": "https://cdn.mos.cms.futurecdn.net/VdvpuXPAzBGSYKwznGb4N9.jpg",
          "price": 35000,
          "name": "Walton"
        },
        {
          "id": 9,
          "picture": "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/img-0224/X-Pro-2022.png",
          "price": 59000,
          "name": "HP Primio"
        },
        {
          "id": 10,
          "picture": "https://www.techadvisor.com/cmsdata/slideshow/3214618/best_laptops_thumb800.jpg",
          "price": 30000,
          "name": "Wilkinson"
        },
        {
          "id": 11,
          "picture": "https://cdn.mos.cms.futurecdn.net/bwcE9CwvUuDvp99XcBywwm.jpeg",
          "price": 80000,
          "name": "Lenovo"
        },
        {
          "id": 12,
          "picture": "https://static.digit.in/default/35c0d8a2c6453ad0d6a57683866b69a92ba5d3a2.jpeg",
          "price": 56000,
          "name": "Techno plus"
        },
        {
          "id": 13,
          "picture": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
          "price": 97000,
          "name": "Macbook Air"
        },
        {
          "id": 14,
          "picture": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
          "price": 43000,
          "name": "Wilkinson Page"
        },
        {
          "id": 15,
          "picture": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge_wm_brb/public/field/image/2021/01/hp-spectre-x360-14-hero3.jpg",
          "price": 75000,
          "name": "Asus Notebook"
        }
      ]

      const [cart, setCart] = useState([]);

      // addToCart handle
      const handleAddCart = (selectedLaptop) =>{
        let newCart = [];
        const exists = cart.find(laptop => laptop.id === selectedLaptop.id);
        const cartLength = [...cart, selectedLaptop].length;

        // product limit
        if (cartLength > 4) {
          alert("You can not add more than 4 items in the cart");
        }
        else if(!exists){
                newCart = [...cart, selectedLaptop];
        }else{
          const rest = cart.filter(laptop => laptop.id !== selectedLaptop.id);
          newCart = [...rest, exists];
        }

        setCart(newCart);
        
      }

      // reset cart 
      const resetCart =()=>{
        setCart([]);
      }

      // random choice
      const chooseHandle =()=>{
        const choice = cart[Math.floor(Math.random()*cart.length)];
        setCart([choice]);
      };

      
    return (
      <div>
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
            <div>
                <Cart 
                cart={cart}
                resetCart={resetCart}
                chooseHandle={chooseHandle}
                ></Cart>
            </div>
        </div>
      </div>
    );
};

export default Laptops;