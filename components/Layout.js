import Navbar from "./Navbar";
import Footer from './Footer';
import BottomNav from './BottomNav';
import { useRouter } from "next/router";

import ScrollToTop from "./reusables/ScrollToTop";
const config={layout1:['/jobs/webstories/[slug]']}

const Layout=({children })=>{
   const {pathname}=useRouter();

   if(config.layout1.includes(pathname)){
    return <>{children}</>
   }else{
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
}
export default Layout;

