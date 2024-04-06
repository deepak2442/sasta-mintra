import React from 'react';
import arrow_icon from '../components/Assets/breadcrum_arrow.png';

const Bredadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex h-2 items-center gap-2 mx-20 my-[25px] text-base font-semibold text-[#5e5e5e]'>
    HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name} 

    </div>
  )
}

export default Bredadcrum