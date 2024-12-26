import React, { useEffect,useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import AppLayout from '../Layout';
export function LandingPage() {
const [products,setProducts] = useState({});
const [error,setError] = useState(null);
const {addToCart,cart,setSelectedProduct} = useContext(CartContext);
//To navigate
const navigate = useNavigate();
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
    
  //FUNCTION TO HANDLE WHEN A PRODUCT IS CLICKED
    const handleProductClick = (product)=>{
      setSelectedProduct(product);
      navigate("/productCard")
    }
  return (
    <>
    {/* Product Rendering */}
    <AppLayout>
     <h1>Categorized Products</h1>
     <h2>Cart Items: {cart.length}</h2>
     {Object.keys(products).map((category)=>(
       <div key={category} >
       <h2>{category}</h2>
   <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"15px"}}>
         {products[category]?.map((product) => (
           <div key={product.id} 
           style={{
         display:"flex",
         flexDirection:"column",
         alignItems: "center",
         backgroundColor: "#Ff6090",
         padding:"10px",
         borderRadius:"4px",
         boxShadow:" 0 2px 4px rgba(0, 0, 0, 0.1)"
        
        }}>
          <img src={product.image} alt="" style={{width:"250px"}}  />
          <p onClick={()=>handleProductClick(product)} style={{cursor:"pointer"}} >{product.title}</p>
          <h3>${product.price}</h3>
         <button onClick={()=> addToCart(product)} style={{width:"150px",padding:"3px",borderRadius:"5px",border:"none",backgroundColor:"#4A8BDF"}} >Add to Cart</button>
          </div>
        )
        )}
        </div>

       </div>
     ))}
    </AppLayout>
    </>
  )
}

export default LandingPage