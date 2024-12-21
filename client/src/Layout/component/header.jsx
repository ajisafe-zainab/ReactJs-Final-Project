import React from 'react';
import { Link } from 'react-router-dom';
 export function Header() {
  return (
    <div>
        <header
        style={{
          width:"100%",
          height:"3rem",
          backgroundColor:"orangered",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          position:"sticky"
        }}
        >
        <div>
          <Link to="/" >    
          <span>Home</span>
          </Link>

          <Link to="/checkOutPage">          
          <span>Cart</span>
          </Link>
        
          <Link to="/receipt">          
          <span>Receipt</span>
          </Link>
        </div>
        </header>
    </div>
  )
}

export default Header