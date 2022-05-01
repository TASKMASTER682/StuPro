import Navbar from "./Navbar";
import Footer from './Footer';
import BottomNav from './BottomNav'

import ScrollToTop from "./reusables/ScrollToTop";

const Layout=({children })=>{

    return(
        <>
       
        <Navbar />
        {children}
        <ScrollToTop />
        <BottomNav />
        <Footer />
        </>
    )
}
export default Layout;

