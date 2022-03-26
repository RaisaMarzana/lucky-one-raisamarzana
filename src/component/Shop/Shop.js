import React, { useEffect, useState } from 'react';
import Chosen from '../Chosen/Chosen';
import Houses from '../Houses/Houses';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [houses, setHouses] = useState([]);
    const [length, setLength] = useState([]);
    const [currentItem, setCurrentItem] = useState([]);
    const [currentRandom, setCurrentRandom] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {

        const name = [...houses, product];
        if (name.length <= 4) {
            setHouses(name);
        }
        else {
            alert("Can't choose more than 4")
        }
        setLength(name.length)

    }
    const handleChooseOne = () => {

        const random = Math.floor(Math.random() * length);

        if (currentRandom !== random) {
            const item = houses[random];
            setCurrentRandom(random);
            setCurrentItem(item);
        }
        else {
            handleChooseOne();
        }

    }
    const handleChooseAgain = () => {
        setHouses([])
        setCurrentItem([])
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <div className='cart'>
                    <h3 className='name'>Choose Yours</h3>
                    <div>
                        {
                            houses?.map(houses => <Houses
                                key={houses.id}
                                houses={houses}
                            ></Houses>
                            )
                        }
                        <div>
                            <button onClick={handleChooseOne} className='btn-cart'>Choose 1 for me</button>
                        </div>
                        <div>
                            <button onClick={handleChooseAgain} className='btn-cart'>Choose Again</button>
                        </div>
                        <div>
                            <Chosen currentItem={currentItem}></Chosen>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Shop;