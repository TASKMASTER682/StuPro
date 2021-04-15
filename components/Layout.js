import Navbar from "./Navbar";
import React from 'react';
import Footer from './Footer'

const Layout=({children })=>{
    return(
        <>
        <div className="unselectable">
        <Navbar />
       
        {children}
        <Footer />
        </div>
        </>
    )
}
export default Layout;