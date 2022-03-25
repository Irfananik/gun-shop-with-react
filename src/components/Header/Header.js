import React from 'react';
import './Header.css'
import { FiShoppingCart } from 'react-icons/fi';

const Header = ({openModal, cart}) => {
    return (
        <nav className="header-container">
            <div className="header-logo">
                <h2>Gun cai.com</h2>
            </div>
            <div>
            <button className="modal-btn" onClick={openModal}><FiShoppingCart></FiShoppingCart><span className = "cart-length">{cart.length}</span></button>
            </div>
        </nav>
    );
};

export default Header;