import React, { useEffect,useState,useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export function LandingPage() {
const [products,setProducts] = useState({});
const [error,setError] = useState(null);
const {addToCart,cart,removeFromCart} = useContext(CartContext);
//Getting data from an Api
    useEffect(()=>{
        //Using IIFE (Immediately Invoked Function Expression)
        (async()=>{
            try
            { 
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        // To categorize products by their category;
        const groupProduct = result.reduce((accumulator,item)=>{
          const {category} = item;
           if(!accumulator[category]){
             accumulator[category] = [];
           }
           {
            accumulator[category].push(item);
            return accumulator;
           }
        },{})
        setProducts(groupProduct);
            }
            catch(err){
        setError("Failed to fetch data,Please try again later");
        console.log(err);
            }
        }
    )()

    },[])

    if(error){
      return <div>{error}</div>
    }
    // //Handle Add to Cart
    // const handleAddToCart = (item)=>{
    
    // }
    console.log(cart);

  return (
    <>
    {/* Product Rendering */}
    <div>
     <h1>Categorized Products</h1>
     <h2>Cart Items: {cart.length}</h2>
     {Object.keys(products).map((category)=>(
       <div key={category}>
        <h2>{category}</h2>
   <div>
        
        {products[category].map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <p>{product.title}</p>
          <h3>${product.price}</h3>
         <button onClick={()=> addToCart(product)}>Add to Cart</button>
          </div>
          

        )
        )}
        </div>

       </div>
     ))}
    </div>
    </>
  )
}

export default LandingPage