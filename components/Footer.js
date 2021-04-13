import Link from 'next/link';
import Image from 'next/image';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer=()=>{
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    return(
        <section className="footer-container bg-success my-1">
        <div className="footer">
            <div className="first-row ">
              <span>  <Image src="/StuproLogo.png" height={220} width={220}   priority alt="ProGrad" /></span>
                <p className="extra-small text-light-gray">
                    © Copyright {year}.ProGrad India | 
                    All rights reserved
                    
                </p>
                <div className="line"></div>
            </div>
            <div className="second-row p-1 ">
                <h2 className="lead text-dark ">Learn more</h2>
                   <p>ProGrad is an open platform where readers come to find insightful and dynamic thinking.Here experts and undiscovered voices come together and dive into the heart of any topic and bring new ideas to surface.Also the jobseekers come here to easily find a job and apply according to thier qualification.</p>
                
            </div>
            <div className="second-row p-1 ">
                <h2 className="lead text-dark">Share what you have learnt</h2>
               <p>If you have knowlege to share ,a story to tell,or a perspective to offer - welcome to ProGrad.Its easy and free to post your thinking on any topic</p>
            </div>
            <div className="third-row p-1">
                <h2 className="lead text-dark">Quick Links</h2>
                <Link href="/about"><p className='text-dark'>About Us</p></Link>
               <Link href="/disclaimer"><p className='text-dark'> Disclaimer</p></Link>
               <Link href="/contact"><p className='text-dark'> Contact us</p></Link>
               <Link href="/privacy"><p className='text-dark'>Terms of use | Privacy Policy </p></Link>
            
             <div className="line"></div>
                <ul className="my-2 icons">
                    <li><a href="https://www.instagram.com/theprograd/" target="_blank"><InstagramIcon  style={{ fontSize: 60 }}/></a></li>
                    <li><a href="https://www.facebook.com/sayed.anwarulhaq.923" target="_blank"><FacebookIcon style={{ fontSize: 60 }} /></a></li>
                    <li><a  href="https:///t.me/theprograd" target="_blank"><TelegramIcon  style={{ fontSize: 60 }}  /></a></li>
                    <li><a href="https://youtube.com/channel/UCFGm2Nfoqs0G29E38B1GZxw" target="_blank"><YouTubeIcon style={{ fontSize: 60 }} /></a></li>

                  

                </ul>
            </div>
        </div>
    </section>
    )
  
    
}
export default Footer;