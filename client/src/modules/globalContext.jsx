import React,{createContext,useState} from 'react';


export const GlobalContext = createContext();

export function GlobalContextProvider({children}) {
const [addToCart,setAddToCart] = useState([]);
const mutateSetAddToCart = (item)=>{
    setAddToCart(item)
}
  return (
    <>
    <GlobalContext.Provider value={{addToCart,setAddToCart,mutateSetAddToCart}}>
      {children}
    </GlobalContext.Provider>
    </>
  )
}

export default GlobalContextProvider