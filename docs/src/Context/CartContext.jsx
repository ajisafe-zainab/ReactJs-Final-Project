import React,{createContext,useState} from 'react';


export const CartContext = createContext();

export function CartContextProvider({children}) {
const [cart,setCart] = useState([]);
const [receipt,setReceipt] = useState(null);
const [paymentSuccess,setPaymentSuccess]= useState(false);

//Function to add product to Cart
 const addToCart = (item)=>{
   setCart((prevoiusCartItems)=>{
//Check if product already exists in the Cart
  const existingProduct = prevoiusCartItems?.find((cartItem) => cartItem.id === item.id)
     if(existingProduct){
//Update the quantity of the existing items
      return prevoiusCartItems?.map((cartItem)=>
         cartItem?.id === item?.id ? { ...cartItem, quantity:cartItem.quantity + 1} : cartItem
        
      )
      }
      else {
// Add the new item with a quantity of 1
        return [...prevoiusCartItems, { ...item, quantity: 1 }]
      }
   
  })
    }
    //Function to delete from Cart
    const removeFromCart = (item)=>{
      setCart((prevoiusCartItems)=> prevoiusCartItems?.filter((cartItem)=> cartItem?.id !== item?.id)

     ) }
    
 
  return (
    <>
    <CartContext.Provider value={{addToCart,cart,setCart,removeFromCart,receipt,paymentSuccess,setPaymentSuccess,setReceipt}}>
      {children}
    </CartContext.Provider>
    </>
  )
}


export default CartContextProvider