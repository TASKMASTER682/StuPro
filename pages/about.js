import Image from 'next/image'
import {DOMAIN} from '../config'
const About =()=>{
    const myLoader = ({ src }) => {
        return `${DOMAIN}/img/owner.jpg`
      }
    return(
        
        <section className="container">
            <h1 className="large text-primary my-2" >
                All about The ProGrad
            </h1>
            <div className="line"></div>
            <div className="job-read nbtn p-2" style={{lineHeight:'2rem'}}>
                
                <p>The ProGrad is a purely Made in India platform which  started as a job board in which we provide all types of govt jobs in India and all types of Private sector jobs India. The jobs shared on The ProGrad are written in detail and easy to understand, so that the job seekers can easily get all types of information related to the particular job in India and helps him to decide weather he/she should apply for it or not .These are the basic functionalities of The ProGrad, but here you can also make and account and share any educational content guest posts, any story to motivate students . You can update your profile from the dashboard and can share your social media accounts to increase you visibility on Internet and helps you a lot in your economic needs.In future we will provide much more features which will make this all in one platform for the students and professionals to learn, share and earn.The Owner of the ProGrad <strong className="text-primary">Sayed Anwar Ul haq </strong>is full stack web developer and a blogger</p>
                <h3 className="text-primary small my-1">About the Owner</h3>
               <div>
               <Image loader={myLoader} className="round-image  m-1" src='/img/owner.jpg' width={250} height={250}  alt={'owner'}/>
               <br/>
               <a href="#" className="btn btn-dark nbtn my-1">Sayed Anwar Ul Haq</a>
               <p className="text-danger">Contact Me On:</p>
               <a href="https://www.facebook.com/sayed.anwarulhaq.18" className="btn btn-primary nbtn my-1">Facebook</a>
               <a href="https://instagram.com/sayedanwar.0.0.7" className="btn btn-primary nbtn my-1">Instagram</a>
               <a href="https://www.linkedin.com/in/the-prograd-5533861bb/" className="btn btn-primary nbtn my-1">LinkedIn</a>

               </div>
                
            </div>
           
        </section>
    )
}
export default About;