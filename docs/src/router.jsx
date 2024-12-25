import {createBrowserRouter} from 'react-router-dom';
import LandingPage from './Components/landingPage';
import CheckOutPage from './Components/checkOutPage';
import Receipt from './Components/receipt';
import ProductCard from './Components/productCard';
export const router = createBrowserRouter([
    {
        path:"/",
        element: <LandingPage/>
    },
    {
        path:"/checkOutPage",
        element: <CheckOutPage/>
    },
    {
        path:"/receipt",
        element: <Receipt/>
    },
    {
        path:"/productCard",
        element:<ProductCard/>
    }
])