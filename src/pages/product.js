import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import { useParams } from 'react-router';
import Bredadcrum from '../components/Bredadcrum';
import ProductDisplay from '../components/ProductDisplay';


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const{productId}= useParams();
  
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Bredadcrum product= {product}/>
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product;