import {APP_NAME,DOMAIN,FB_APP_ID} from "../config";
import { BreadcrumbJsonLd} from 'next-seo';



const Disclaimer=()=>{

    return(
       <>
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://www.theprograd.com/',
        },
        {
          position: 2,
          name: 'Disclaimer',
          item: 'https://www.theprograd.com/disclaimer',
        }
      ]}
    />
       <section className="lg:pt-12 px-2 pt-6 lg:px-60 w-auto">
       <h2 className="text-lg font-bold text-red-400 mt-5">Disclaimer</h2>
           <div className=" shadow-md rounded-md p-2 my-4 ">
           <p>We share educational content from ProGrad.If we Have added some content that belong to you or your organization by mistake, We are sorry for that. We apologize for that and assure you that this wont be repeated in future. If you are rightful owner of the content used in our Website, Please mail us with your Name, Organization Name, Contact Details, Copyright infringing URL and Copyright Proof (URL or Legal Document) at <span className="font-bold text-teal-400">theprograds@gmail.com</span></p>
           <p>I assure you that, I will remove the infringing content Within 48 Hours.</p>
           </div>
       </section>
      
       </>
    )
}

export default Disclaimer;