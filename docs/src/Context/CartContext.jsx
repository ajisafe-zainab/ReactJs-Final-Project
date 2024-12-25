import React,{createContext,useState,useEffect} from 'react';
export const CartContext = createContext();

export function CartContextProvider({children}) {
const [cart,setCart] = useState(JSON.parse(localStorage.getItem('list'))||[]);
const [receipt,setReceipt] = useState(null);
const [paymentSuccess,setPaymentSuccess]= useState(false);
const [selectedProduct,setSelectedProduct] = useState(null);

//FUNCTION TO ADD TO CART
 const addToCart = (item)=>{
   setCart((prevoiusCartItems)=>{
//Check if product already exists in the Cart
  const existingProduct = prevoiusCartItems?.find((cartItem) => cartItem.id === item.id)
     if(existingProduct){
//Update the quantity of the existing items
      return prevoiusCartItems?.map((cartItem)=>
         cartItem?.id === item?.id ? { ...cartItem, quantity:cartItem.quantity + 1} : cartItem
      // alert(`${cartItem.title} added to cart`)
    )
      }
      else {
// Add the new item with a quantity of 1
        return [...prevoiusCartItems, { ...item, quantity: 1 }]
      }
   
  })
    }

 //Using LocalStorage
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(cart));
    // setStorage(JSON.parse(localStorage.getItem('list')))
  },[cart.length]);

//FUNCTION TO DELETE FROM CART
    const removeFromCart = (item)=>{
      setCart((prevoiusCartItems)=> prevoiusCartItems?.filter((cartItem)=> cartItem?.id !== item?.id)

     ) }
    
 
  return (
    <>
    <CartContext.Provider value={{addToCart,cart,setCart,removeFromCart,receipt,paymentSuccess,setPaymentSuccess,setReceipt,setSelectedProduct,selectedProduct}}>
      {children}
    </CartContext.Provider>
    </>
  )
}


export default CartContextProvider