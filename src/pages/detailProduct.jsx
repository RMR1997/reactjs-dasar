import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../services/product.service';

//Dynamic Routing


export default function DetailProduct() {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getDetailProduct(id,(data) => {
            setProduct(data);
        });
    },[id]);
    console.log(product);
  return (
    <div>
        <div>Detail Product : {id} {product.title}</div>
    </div>
  
  )
}
