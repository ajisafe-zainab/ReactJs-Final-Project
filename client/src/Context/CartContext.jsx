import React,{useContext} from 'react';
import GlobalContext from '../modules/globalContext';

function CartContext() {
    const {addToCart,setAddToCart,mutateSetAddToCart} = useContext(GlobalContext);

  return (
    <div>CartContext</div>
  )
}

export default CartContext