import React,{useContext,useState} from 'react';
import {CartContext} from '../Context/CartContext';
import AppLayout from '../Layout';

export function CheckOutPage() {
//States from CartContext
const {cart,addToCart,removeFromCart,setPaymentSuccess,paymentSuccess,setReceipt,receipt} = useContext(CartContext); 

  if (!cart || cart?.length === 0) {
    return <p>Your cart is empty or loading...</p>;
  }

//To calculate Total price
   const totalPrice = cart?.reduce((accumulator,item)=> accumulator + item?.price * item?.quantity ,0)
   
//TO PROCESS PAYMENT
   const handlePayment = ()=>{  
//Simulate Payment
    const transactionID = Math.random().toString(36).substring(2,9).toLocaleUpperCase();
    const date = new Date().toLocaleString();
//Create Receipt data
    const newReceipt = {
     items:cart,
     totalAmount: totalPrice,
     transactionID,
     date,
    }
    setReceipt(newReceipt); //Store Receipt
    setPaymentSuccess(true); //Make payment successful
    alert("Payment Successful")
  }

  return (
    <>
    <AppLayout>
        <h1>Cart</h1>
        
          { cart?.length === 0 ? (
        <p>Your cart is empty!</p>
      ) :(cart?.map((item,index) => (
            <div key={item?.id || index}>
          <p>{item?.title || "Untitled Item"}</p>
          <button onClick={() => addToCart(item)}>+</button>
          <button>{item?.quantity}</button>
          <button onClick={() => removeFromCart(item)}>x</button>
        </div>
        ))
      )}
       <h3>Total Price:${totalPrice.toFixed(2)}</h3>
      <button onClick={handlePayment}>Pay Now</button>
        </AppLayout>       
    </>
  )
}

export default CheckOutPage