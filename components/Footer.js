import Link from 'next/link';
import ShowJobCategories from './jobs/ShowJobCategories';
import ShowCategories from './blogs/ShowCategories';

const Footer=()=>{
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    return(
        <section className="footer-container bg-success my-2">
        <div className="footer">
            <div className="first-row ">
              <span>  <img src="/StuproLogo.png" alt="" /></span>
                <p className="extra-small text-light-gray">
                    © Copyright {year}.ProGrad India | 
                    All rights reserved
                    
                </p>
                <div className="line"></div>
            </div>
            <div className="second-row p-1 ">
                <h2 className="lead text-dark">Job Categories</h2>
                <ul>
                    <li><ShowJobCategories /></li>
                   
                </ul>
            </div>
            <div className="second-row p-1 ">
                <h2 className="lead text-dark">Blog Categories</h2>
                <ul>
                    <li><ShowCategories/></li>
                    
                </ul>
            </div>
            <div className="third-row p-1">
                <h2 className="lead text-dark">Quick Links</h2>
               <Link href="/disclaimer"><p className='text-dark'> Disclaimer</p></Link>
               <Link href="/contact"><p className='text-dark'> Contact us</p></Link>
               <Link href="/privacy"><p className='text-dark'>Terms of use | Privacy Policy </p></Link>
            
             <div className="line"></div>
                <ul className="my-2 icons">
                    <li><a href="https://www.instagram.com/theprograds/" target="_blank"><i className="fab fa-instagram small "></i></a></li>
                    <li><a href="https://www.facebook.com/sayed.anwarulhaq.18" target="_blank"><i className="fab fa-facebook small "></i></a></li>
                    <li><a href="https://www.linkedin.com/in/sayed-anwar-88a837168/" target="_blank"><i className="fab fa-linkedin small"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
    )
  
    
}
export default Footer;