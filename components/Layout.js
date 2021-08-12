import Navbar from "./Navbar";
import Footer from './Footer'
import ScrollToTop from "./reusables/ScrollToTop";

const Layout=({children })=>{

    return(
        <>
        <div className="unselectable">
        <Navbar />
        <main>
        {children}
        </main>
        <ScrollToTop />
        <Footer />
        </div>
        </>
    )
}
export default Layout;

