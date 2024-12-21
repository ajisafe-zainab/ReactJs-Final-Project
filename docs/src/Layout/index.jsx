import React from 'react';
import Header from './component/header';
export function AppLayout({children}) {
  return (
    <div style={{width:"100vw",height:"100vh",position:"relative"}}>
        <Header/>
        <main style={{width:'100%',height:"100%",padding:"2rem"}}>{children}</main>
    </div>
  )
}

export default AppLayout