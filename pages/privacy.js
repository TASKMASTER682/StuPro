import Head from 'next/head';
import {APP_NAME} from '../config';
import { BreadcrumbJsonLd} from 'next-seo';


const PrivacyPolicy=()=>{

    return (
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
          name: 'Privacy Policy',
          item: 'https://www.theprograd.com/privacy',
        },
      
      ]}
    />
    <section className="lg:pt-14 px-2 pt-6 lg:px-60 w-auto">
        <h2 className=" text-2xl font-bold text-teal-400 my-2">
        Privacy Policies
        </h2>
        <hr />
        <div className=" shadow-md shadow-green-400 rounded-lg mb-2 p-2">
        
        <ol className='list-decimal pl-4'>
            <li><p>At ProGrad, accessible from <a className='text-green-400' href="https://www.theprograd.com">theprograd.com</a> , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ProGrad and how we use it.</p></li>
            <li><p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to Contact through email at <b>theprograds@gmail.com</b></p></li>
        </ol>
        <p className=" text-lg font-bold text-red-400">Log Files</p>
        <ol>
            <li className='p-2'><p>ProGrad follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p></li>
        </ol>
        <p className="text-lg font-bold text-red-400">Cookies and Web Beacons</p>
          <p className='p-2'>Like any other website, ProGrad uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            <p className="text-lg font-bold text-red-400">Google DoubleClick DART Cookie</p>
            <p className='p-2'>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">Click me to access URL</a></p>
            <p className="text-lg font-bold text-red-400">Privacy policies</p>
            <ol className='list-decimal p-2 pl-4' >
                <li><p>You may consult this list to find the Privacy Policy for each of the advertising partners of ProGrad. Our Privacy Policy was created with the help of the <a  href="https://webbeast.in">GDPR Privacy Policy Generator</a></p></li>
                <li><p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ProGrad, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p></li>
                <li><p>Note that ProGrad has no access to or control over these cookies that are used by third-party advertisers.</p></li>
            </ol>
            <p className="text-lg font-bold text-red-400">Third Pary Privacy Policies</p>
            <ol className='list-decimal p-2 pl-4'>
                <li><p>ProGrad's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p></li>
                <li><p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p></li>
            </ol>
         <p className="text-lg font-bold text-red-400">Children's Information</p>
         <ol className='list-decimal p-2 pl-4'>
             <li><p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p></li>
             <li><p>ProGrad does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records.</p></li>
         </ol>
         <p className="text-lg font-bold text-red-400">Online Privacy Policy Only</p>
         <ol className='list-decimal p-2 pl-4'>
             <li><p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ProGrad. This policy is not applicable to any information collected offline or via channels other than this website.</p></li>
         </ol>
         <p className="text-lg font-bold text-red-400">Consent</p>
         <ol className='list-decimal p-2 pl-4'>
             <li><p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions</p></li>
         </ol>
        </div>
    </section>
    
    </>
    )
}

export default PrivacyPolicy;
