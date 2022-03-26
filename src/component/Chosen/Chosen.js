import React from 'react';
import './Chosen.css'

const Chosen = (props) => {
    const { name, img } = props.currentItem;
    return (
        <div>
            <div >
                {img || name ? <div className='cart-items'><img className='image' src={img} alt="" height={40} width={40} /><span className='name'>{name}</span></div> : ''}
            </div>
        </div>
    );
};

export default Chosen;