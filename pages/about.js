import Image from 'next/image'
import {APP_NAME,DOMAIN,FB_APP_ID} from "../config";
import Head from 'next/head';
const About =()=>{
    const myLoader = ({ src }) => {
        return `${DOMAIN}/img/owner.jpg`
      }
      const head=()=>{
        <Head>
        <title>About The ProGrad</title>
        <meta
            name="description"
            content="The ProGrad is platform for students who can find best jobs here and can prepare from the study material we provide them."
       
        />
        <link rel="canonical" href={`${DOMAIN}`} />
        <meta property="og:title" content={`The ${APP_NAME} |The ProGrad is platform for students who can find best jobs here and can prepare from the study material we provide them. `} />
        <meta
            property="og:description"
            content="The ProGrad is platform for students who can find best jobs here and can prepare from the study material we provide them."
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />
        <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
        <meta property="og:image:secure_url" content={`${DOMAIN}/stupro2.png`} />
        <meta property="og:image:type" content="img/stupro2.png" />
        <meta property="fb:app_id" content={`${FB_APP_ID}`} />
     
    
    </Head>
      }
    return(
        
        <section className="container">
            <h1 className="large text-primary my-2" >
                All about The ProGrad
            </h1>
            <div className="line"></div>
            <div className="job-read nbtn p-2" style={{lineHeight:'2rem'}}>
                
                <p>The ProGrad is a purely Made in India platform which  started as a job board in which we provide bet central and state govt jobs notification and best Private sector jobs in easy and fastest way in India. The jobs shared on The ProGrad are written in detail and easy to understand, so that the job seekers or fastjob searchers can easily get all the particular information related to the particular job in India and helps him to decide weather he/she should apply for it or not .These are the basic functionalities of The ProGrad, but here you can also make and account and share any educational content guest posts, any story to motivate students . You can update your profile from the dashboard and can share your social media accounts to increase you visibility on Internet and helps you a lot in your economic needs.In future we will provide much more features which will make this all in one platform for the students and professionals to learn, share and earn.The Owner of the ProGrad <strong className="text-primary">Sayed Anwar Ul haq </strong>is full stack web developer and a blogger</p>
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