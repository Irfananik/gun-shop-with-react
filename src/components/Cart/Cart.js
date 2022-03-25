import React from 'react';
import './Cart.css'

const Cart = ({gunData}) => {
    const {name,img,bullet,action,price,capacity} = gunData
    return (
        <div className="cart-container">
            <div>
                <h3>Gun Name: {name}</h3>
                <img className="gun-img" src={img} alt="" />
                <p>Bullet: {bullet}</p>
                <p>Action: {action}</p>
                <p>Price: {price}</p>
                <p>Capacity: {capacity}</p>
            </div>
        </div>
    );
};

export default Cart;