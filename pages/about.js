import Image from 'next/image'
import {APP_NAME,DOMAIN,FB_APP_ID} from "../config";
import Head from 'next/head';
const About =()=>{
    const myLoader = (src) => {
        return `${DOMAIN}/img/${src}` 
      }
      const head=()=>{
        <Head>
        <title>About The ProGrad</title>
        <meta
            name="description"
            content="We provide Government job notifications,Private Job notifications,Free of cost study material,educational blogs and tips and tricks to crack any entrance exam"
       
        />
        <link rel="canonical" href={`${DOMAIN}/about`} />
        <meta property="og:title" content={`About The ${APP_NAME} `} />
        <meta
            property="og:description"
            content="We provide Government job notifications,Private Job notifications,Free of cost study material,educational blogs and tips and tricks to crack any entrance exam"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}/about`} />
        <meta property="og:site_name" content={`The ${APP_NAME}`} />
        <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
        <meta property="og:image:secure_url" content={`${DOMAIN}/stupro2.png`} />
        <meta property="og:image:type" content={`${DOMAIN}/stupro2.png`} />
     
    
    </Head>
      }
    return(
        <>
        {head()}
<section className="container">
            <h1 className="large text-primary my-3" >
                All about The ProGrad
            </h1>
            <div className="line"></div>
            <div className="job-read nbtn p-2" style={{lineHeight:'2rem'}}>
                
                <p>
                Growing By leaps and bounds The ProGrad is a one-stop-shop of all that is required by an aspiring professional to be.
We bring the grads aspiring to learn and the professionals willing to contribute on one platform making the teaching and learning experience all the more productive and joyous.
From finding guidance and counseling from experts and achievers of their respective professions, by getting in touch through the community of successful professionals for career planning, to availing the strategy and study material from the exhaustive resources of the ProGrad to achieving the set goals and getting skilled for the profession of choice and getting hired, we have it all.
The proGrad assimilates all at one place and comprehensively helps the grads to plan the career and build strong foundations from the very beginning.</p>
                <h3 className="text-primary small my-1">About the Owner</h3>
                <p>                The Owner of the ProGrad <strong className="text-primary">Sayed Anwar Ul haq </strong>is an Electronics and Communication Engineer, a full stack web developer, and a blogger</p>
               <div>
               <Image loader={()=>myLoader('owner.jpg')} className="round-image  m-1" src='/img/owner.jpg' placeholder="blur" blurDataURL='/public/img/blurr-min.jpg' width={250} height={250}  alt={'owner'}/>
               <br/>
               <a href="#" className="btn btn-dark nbtn my-1">Sayed Anwar Ul Haq</a>
               <p className="text-danger">Contact Me On:</p>
               <a href="https://www.facebook.com/sayed.anwarulhaq.18" className="btn btn-primary nbtn my-1">Facebook</a>
               <a href="https://instagram.com/sayedanwar.0.0.7" className="btn btn-primary nbtn my-1">Instagram</a>
               <a href="https://www.linkedin.com/in/the-prograd-5533861bb/" className="btn btn-primary nbtn my-1">LinkedIn</a>

               </div>
                
            </div>
           
        </section>
        </>
        
    )
}
export default About;