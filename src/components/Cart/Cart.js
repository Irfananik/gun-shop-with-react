import React from 'react';
import './Cart.css'
import { FiShoppingCart } from 'react-icons/fi';

const Cart = ({gunData,handleCart}) => {
    const {name,img,bullet,action,price,capacity,id} = gunData
    return (
        <div className="cart-container">
            <div>
                <h3>Gun Name: {name}</h3>
                <img className="gun-img" src={img} alt="" />
                <p>Bullet: {bullet}</p>
                <p>Action: {action}</p>
                <p>Price: {price}</p>
                <p>Capacity: {capacity}</p>
                <button onClick={() => handleCart(id)} className="cart-btn">
                    <FiShoppingCart className="cart-icon"/>
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Cart;