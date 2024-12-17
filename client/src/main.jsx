import { StrictMode,useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import GlobalContextProvider from './modules/globalContext.jsx';
import { GlobalContext } from './modules/globalContext.jsx';

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
     <StrictMode>

    <App />
  </StrictMode>
   </GlobalContextProvider>
)
