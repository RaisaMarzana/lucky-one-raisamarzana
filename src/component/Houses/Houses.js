import React from 'react';
import './Houses.css'

const Houses = (props) => {
    const { name, img } = props.houses;
    return (
        <div className='cart-items'>
            <img className='image' src={img} alt="" height={40} width={40} /><span className='name'>{name}</span>

        </div>
    );
};

export default Houses;