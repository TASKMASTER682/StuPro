import Link from 'next/link';
import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import {DOMAIN} from '../config';
const TelegramIcon =dynamic(async ()=>import('@material-ui/icons/Telegram'),{ssr:false});
const InstagramIcon =dynamic(async ()=>import('@material-ui/icons/Instagram'),{ssr:false}) ;
const FacebookIcon =dynamic(async ()=>import('@material-ui/icons/Facebook'),{ssr:false});
const YouTubeIcon =dynamic(async ()=>import('@material-ui/icons/YouTube'),{ssr:false});
const RssFeedIcon =dynamic(async ()=>import('@material-ui/icons/RssFeed'),{ssr:false});
const Footer=()=>{
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    const myLoader = ( src ) => {
        return `${DOMAIN}/img/StuproLogo.png` 
      }
    return(
        <section className="footer-container bg-success my-1" style={{borderTopLeftRadius:'0.8rem',borderTopRightRadius:'0.8rem'}}>
        <div className="footer">
            <div className="first-row ">
              <span>  <Image loader={myLoader} src={`${DOMAIN}/img/StuproLogo.png`} height={220} width={220}   priority alt="The ProGrad Logo" placeholder="blur" blurDataURL='/img/blurr-min.jpg' /></span>
                <p className="extra-small text-light-gray">
                    © Copyright {year}.The ProGrad | All rights reserved | India
                    
                </p>
                <div className="line"></div>
            </div>
            <div className="second-row p-1 ">
                <h2 className="lead text-dark ">Learn and Get hired</h2>
                   <p>A Platform Bringing Aspiring Grads And Excelling Professionals Togather. A Perfect Indian platform to find Govt Jobs, Private Jobs, Work from home and instatnt Jobs.It is Community That Has A Perfect Ecosystem For Every Niche Of Education System.Get free pdf notes and much more study materials for your coming exams</p>
            
            </div>
            <div className="second-row p-1 ">
                <h2 className="lead text-dark">Share what you have learnt</h2>
               <p>If you have knowlege to share ,a story to tell,or a perspective to offer - welcome to ProGrad.Share your knowledge as well as get study materials ,jobs, private jobs and you can also download your cv free of cost</p>
            </div>
            <div className="third-row p-1">
                <h2 className="lead text-dark">Quick Links</h2>
                <Link href="/about"><p className='text-dark'>About Us</p></Link>
               <Link href="/disclaimer"><p className='text-dark'> Disclaimer</p></Link>
               <Link href="/contact"><p className='text-dark'> Contact us</p></Link>
               <Link href="/privacy"><p className='text-dark'>Terms of use | Privacy Policy </p></Link>
               <Link href="/sitemap.xml"><p className='text-dark'>Sitemap</p></Link>

            
             <div className="line"></div>
                <ul className="my-2 icons">
                    <li><a href="https://www.instagram.com/theprograd/"  target="_blank"><InstagramIcon  style={{ fontSize:45 }}/></a></li>
                    <li><a href="https://www.facebook.com/sayed.anwarulhaq.923" target="_blank" ><FacebookIcon style={{ fontSize:45 }} /></a></li>
                    <li><a  href="https://t.me/theprograd" target="_blank" ><TelegramIcon  style={{ fontSize:45 }}  /></a></li>
                    <li><a href="http://feeds.feedburner.com/theprograd/feeds" target="_blank" ><RssFeedIcon style={{ fontSize:45 }} /></a></li>
                    <li><a href="https://youtube.com/channel/UCFGm2Nfoqs0G29E38B1GZxw" target="_blank" ><YouTubeIcon style={{ fontSize:45 }} /></a></li>
                </ul>
            </div>
        </div>
    </section>
    )
  
    
}
export default Footer;