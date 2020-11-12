import Private from '../components/auth/Private';


const Disclaimer=()=>{
    return(
       <>
       <Private>
       <section className="container">
       <h2 className="small text-primary m-1 ">Disclaimer</h2>
           <div className="job-read p-2 nbtn">
           <p>We share educational content from ProGrad.If we Have added some content that belong to you or your organization by mistake, We are sorry for that. We apologize for that and assure you that this wont be repeated in future. If you are rightful owner of the content used in our Website, Please mail us with your Name, Organization Name, Contact Details, Copyright infringing URL and Copyright Proof (URL or Legal Document) at <strong>theprograd@gmail.com</strong></p>
           <p>I assure you that, I will remove the infringing content Within 48 Hours.</p>
           </div>
       </section>
       </Private>
       </>
    )
}

export default Disclaimer;