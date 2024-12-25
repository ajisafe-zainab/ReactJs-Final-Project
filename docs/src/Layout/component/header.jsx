import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
 export function Header() {
  const [searchByTitle,setSearchByTitle] = useState(null);
  const[mode,setMode] = useState("light");
//FUNCTION TO PERFORM MODE OPERATION
 useEffect(()=>{
  const savedMode = localStorage.getItem("mode") || "light";
  setMode(savedMode);
  document.documentElement.setAttribute("data-mode",savedMode)
 },[])


 const toggleMode = ()=>{
   const newMode = mode === "light" ? "dark" : "light";
   setMode(newMode);
   localStorage.setItem('mode',newMode)
   document.documentElement.setAttribute("data-mode",newMode)
 }
   // CSS styles using JavaScript objects
   const styles = {
    button: {
      padding: "10px 15px",
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: "var(--button-background)",
      color: "var(--button-text)",
      border: "none",
      borderRadius: "5px",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
  };
  return (
    <div> 
        <header
        style={{
          width:"100%",
          height:"3rem",
          backgroundColor:" #Ff6090",
          display:"flex",
          justifyContent:"space-between",
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
         <input type="text" placeholder='Search by Title' onChange={(e)=>{e.target.value}} />
          <button onClick={toggleMode} style={styles.button} >{mode === "light" ? "Switch to Dark Mode 🌙" : "Switch to Light Mode ☀️"}</button>
        </div>
        </header>
    </div>
  )
}

export default Header