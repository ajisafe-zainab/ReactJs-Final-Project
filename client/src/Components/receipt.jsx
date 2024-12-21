import React,{useContext} from 'react';
import AppLayout from '../Layout';
import { CartContext } from '../Context/CartContext';
export function Receipt() {
  const{receipt,paymentSuccess} = useContext(CartContext);
  // To print receipt
  const handlePrint = ()=>{
    if(receipt){
      window.print(); //Opens the print dialog
    }
  }
  return (
    <AppLayout>
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
    </AppLayout>
  )
}

export default Receipt