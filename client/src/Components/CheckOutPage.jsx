import React,{useContext,useState} from 'react';
import {CartContext} from '../Context/CartContext';
// import LandingPage from './LandingPage';

export function CheckOutPage() {

    const {cart,addToCart,removeFromCart} = useContext(CartContext); 
    const[paymentSuccess,setPaymentSuccess]= useState(false);
    const [receipt,setReceipt] = useState(null);

  if (!cart || cart?.length === 0) {
    return <p>Your cart is empty or loading...</p>;
  }

  //To calculate Total price
   const totalPrice = cart?.reduce((accumulator,item)=> accumulator + item?.price * item?.quantity ,0)
   
   //To process Payment
   const handlePayment = ()=>{
    //Mock Logic
    // if(cart?.length === 0){
    //    alert("Your cart is empty !");
       
    // }
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
// To print receipt
    const handlePrint = ()=>{
      if(receipt){
        window.print(); //Opens the print dialog
      }
    }
  //  console.log(receipt)
  return (
    <div>
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

        {
          paymentSuccess && receipt &&(
            <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
              <h3>Payment Receipt</h3>
              <p><strong>Transaction ID:</strong> {receipt.transactionID}</p>
              <p><strong>Date:</strong> {receipt.date}</p>
              <h4>Purchased Items:</h4>
              <ul>
                {receipt?.items?.map((item)=>(
                  <li key={item.id}>
                   {item.title}
                  </li>
                ))}
              </ul>
              <h4>Total Amount:${receipt.totalAmount.toFixed(2)}</h4>
              <button onClick={handlePrint}>Print Receipt</button>
            </div>
          )
        }
        
            
    </div>
  )
}

export default CheckOutPage