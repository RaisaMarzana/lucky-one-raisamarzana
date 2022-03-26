
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, img, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" height={150} width={150} />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Rent: {price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-card'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;