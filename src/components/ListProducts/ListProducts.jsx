import { useState } from 'react';
import { productsApi } from '../../api/productsApi';
import RenderProducts from '../RenderProducts/RenderProducts';
import s from './style.module.css';

const ListProducts = () => {
  console.log(productsApi);
  const [currentProduct, setCurrentProduct] = useState(productsApi);

  const productList = (product) => {
    setCurrentProduct(product)
  }

  return (
    <div className={s.grid}>
      <RenderProducts list={productList} product={currentProduct} title='Astro Tech' />
    </div>
  )
}

export default ListProducts