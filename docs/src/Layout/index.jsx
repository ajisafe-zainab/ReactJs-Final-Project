import React from 'react';
import Header from './component/header';
export function AppLayout({children}) {
  return (
    <div style={{width:"100vw",height:"100vh"}}>
        <Header/>
        <main style={{padding:".2rem",backgroundColor:"#4A8BDF"}}>{children}</main>
    </div>
  )
}

export default AppLayout