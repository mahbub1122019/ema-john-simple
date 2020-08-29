import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData';
import Product from '../components/Product/Product';

const ProductDetail = () => {
    const {productkey}=useParams();
    const product =fakeData.find(pd =>pd.key ===productkey);
    return (
        <div>
            <h1 className="text-center text-warning">Your Product Details Here:</h1>
            <Product showAddToCart={false}  product={product}></Product>
        </div>
    );
};

export default ProductDetail;