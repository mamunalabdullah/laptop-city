import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faShoppingBag, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";



const Cart = ({ cart , resetCart, chooseHandle }) => {
    const{ name }=cart;
    let quantity =0;
    for(const laptop of cart){
        quantity = quantity + laptop.quantity;
    }
    return (

        <div className="cart">
            <h1>Selected Laptops</h1>
            <div>
                {
                    cart.map((item) => (
                        
                        <div className='item-info'>
                            <img src={item.picture} alt="" />
                            <h5 key={item.id}>{item.name}</h5>
                            <button className='delete-btn'>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>
                        </div>
                    ))
                }
            </div>

            <div className="buttons">
                <button onClick={() => chooseHandle()} className='choose-btn'>
                    <p className='txt1'>Choose one</p>
                    <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                </button>
                <button onClick={() => resetCart()} className='remove-btn'>
                        <p className='txt2'>Choose Again</p>
                        <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};


export default Cart;