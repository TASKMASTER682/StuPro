import {APP_NAME,DOMAIN,FB_APP_ID} from "../config";
import Head from 'next/head';


const Disclaimer=()=>{
    const head=()=>{
        <Head>
        <title> Disclaimer | The ProGrad  </title>
    <meta
        name="description"
        content="Read the disclaimer of The ProGrad"
   
    />
    <link rel="canonical" href={`${DOMAIN}`} />
    </Head>
    }
    return(
       <>
      {head()}
       <section className="container">
       <h2 className="small text-primary m-1 ">Disclaimer</h2>
           <div className="job-read p-2 nbtn">
           <p>We share educational content from ProGrad.If we Have added some content that belong to you or your organization by mistake, We are sorry for that. We apologize for that and assure you that this wont be repeated in future. If you are rightful owner of the content used in our Website, Please mail us with your Name, Organization Name, Contact Details, Copyright infringing URL and Copyright Proof (URL or Legal Document) at <strong>theprograds@gmail.com</strong></p>
           <p>I assure you that, I will remove the infringing content Within 48 Hours.</p>
           </div>
       </section>
      
       </>
    )
}

export default Disclaimer;