import React,{useContext} from 'react';
import AppLayout from '../Layout';
import { CartContext } from '../Context/CartContext';
 export function ProductCard() {
  const {selectedProduct} = useContext(CartContext);
  console.log(selectedProduct);
  return (
    <AppLayout>
     <h2>Details</h2>
     <div>
     <img src={selectedProduct?.image} alt=""/>
     <p><strong>Title: {selectedProduct?.title}</strong></p>
     <h3>Price: {selectedProduct?.price}</h3>
     <p>Description{selectedProduct?.description || "No description available" }</p>
     <p>Category:{selectedProduct?.category}</p>
     {/* <h5>Rating: {selectedProduct?.rating}</h5> */}
     <h3>Rating: {selectedProduct?.rating.rate} ({selectedProduct?.rating.count} reviews)</h3>

     {/* <h3>{price}</h3> */}
     </div>
      

    </AppLayout>
  )
}

export default ProductCard