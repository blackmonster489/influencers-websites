import React from 'react'
import { Toaster } from "react-hot-toast";
import Navbar from './navbar';


const MainLayout = ({ children }) => {
    return (
        <div>
            <Toaster position='top-center'toastOptions={{duration:1000}}/>
                
                <Navbar />
                {children}
        </div>
    )
}

export default MainLayout;