import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
export function App() {
  return (
    <div>
  {/* {<LandingPage/>}
 { <CheckOutPage/>} */}
 { <RouterProvider router={router}/>}
    </div>
  )
}

export default App
