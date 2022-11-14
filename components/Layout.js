import Navbar from "./Navbar";
import Footer from './Footer';
import BottomNav from './BottomNav';
import { useRouter } from "next/router";
import NextNProgress from 'nextjs-progressbar';
import ScrollToTop from "./reusables/ScrollToTop";

const Layout=({children })=>{
    const config={layout1:['/jobs/webstories/[slug]']}
   const {pathname}=useRouter();

   if(config.layout1.includes(pathname)){
    return <>{children}</>
   }else{
    return(
        <>
        <NextNProgress color='#0f1317' />
        {/* <Navbar /> */}
        {children}
        <ScrollToTop />
        <BottomNav />
        <Footer />
        </>
    )
   }
}
export default Layout;

