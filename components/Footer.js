import ShowJobCategories from './jobs/ShowJobCategories';
import ShowJobTags from './jobs/ShowJobTags';

const Footer=()=>{
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    return(
        <section className="footer-container bg-success my-2">
        <div className="footer">
            <div className="first-row ">
              <span>  <img src="/StuproLogo.png" alt="" /></span>
                <p className="extra-small text-light-gray">
                    © Copyright {year}.
                    All rights reserved
                    <br />
                    Created by The TaskMasters
                </p>
                <div className="line"></div>
            </div>
            <div className="second-row p-1 ">
                <h2 className="lead text-dark">Categories</h2>
                <ul>
                    <li><ShowJobCategories /></li>
                   
                </ul>
            </div>
            <div className="second-row p-1 ">
                <h2 className="lead text-dark">Job Categories</h2>
                <ul>
                    <li><ShowJobTags/></li>
                    
                </ul>
            </div>
            <div className="third-row p-1">
                <h2 className="lead text-dark">Quick Links</h2>
               <p>About us</p>
               <p>Contact us</p>
               <p>Terms and conditions</p>
               <div className="line"></div>
                <ul className="my-2 icons">
                    <li><a href="#"><i className="fab fa-instagram small "></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook small "></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter small"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin small"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
    )
  
    
}
export default Footer;