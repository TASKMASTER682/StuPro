import React from 'react';
import Image from 'next/image';
import {APP_NAME ,DOMAIN} from '../config';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';


const MakeCV = () => {

    return (
        <>
    <NextSeo
      title='Best Online Free Online CV Builder '
      description="Make your CV free of cost and download it at th ProGrad.Make your profile on The ProGrad and download your cv easily and upload it on the job application portal.It can help you get hired."
      canonical="https://www.theprograd.com/free-cv-builder"

      openGraph={{
        url: 'https://www.theprograd.com/free-cv-builder',
        title:'Best Online Free Online CV Builder',
        description:"Make your CV free of cost and download it at th ProGrad.Make your profile on The ProGrad and download your cv easily and upload it on the job application portal.It can help you get hired..",
        images:[
        {
           url: 'https://www.theprograd.com/img/cv.svg',
            width: 800,
            height: 600,
            alt: 'The ProGrad Home Page',
            type: 'image/svg',
          }
          ],
        site_name: 'The ProGrad',
      }}

      facebook={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
        appId: '721482821740858'
      }}
    />

         <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://www.theprograd.com/',
        },
        {
          position: 2,
          name: 'CV Builder',
          item: 'https://www.theprograd.com/free-cv-builder',
        }
      ]}
    />
    <section className='p-3' >
        <h1 className='text-2xl font-bold text-teal-500 my-4 lg:mx-60 lg:pt-14'>Free Online CV Builder</h1>
        <div className="lg:mx-60 shadow-md rounded-md shadow-teal-400 mb-3">

        <p className='text-lg font-bold text-green-500'>If you already know the process the click below button to start now</p>
        <br />
        <a href="/signin" className='bg-teal-500 p-2 rounded-md m-3'>Start now</a>
        <br />
        <h2 className='text-lg text-red-500 font-bold m-2 '>Make your professional CV on The ProGrad and Get hired.</h2>

<p className='p-2'>As you all know, if you want to apply for any job then firstly the recruiting agency will ask you for your CV and the most important thing is that your CV should look a bit professional and almost all the basic details should be covered like your experience details, educational details hobbies, skills, etc.<br />
If your CV design is perfect then HR will surely be attracted to it a little and he/she will read your CV carefully and at the very first time, he/she will decide whether he will hire you or not. We have come up with a professional-looking CV design so that you can download it absolutely free of cost but for this, we will need your details, whatever data you fill in your CV will be secure on our server, we will not share your data with anyone.</p>

<h3 className="text-lg text-red-500 font-bold m-2">The process of making a CV is given below, read it carefully.</h3>

<ol className="p-2 pl-7 list-decimal">
	<li>
	<p>First of all, you have to sign up on <span className='font-bold'>The ProGrad</span> and after that sign in.</p>
	</li>
	<li>
	<p>Now you will see the <span className="bg-teal-500 p-1 rounded-md m-3">Dashboard</span> button on the top right corner(in mobile it is on the bottom bar), click it and go to your dashboard, here you will find the button of <span className="btn btn-primary nbtn">Update Profile</span>, click on it and fill up all the details and click on the Update button.</p>
	</li>
	<li>Now go to your own dashboard and click on <span className="bg-teal-500 p-1 rounded-md m-3">Add Education</span> button and fill all the fields given in it and submit. You can repeat this process as many times as you want which means you can fill in any number of education details as you want and it will automatically saving to your CV</li>
	<li>Just like this, you will see another button in the dashboard on which <span className="bg-teal-500 p-1 rounded-md m-3">Add Experience</span> is written, click it and fill up your experience details. You can repeat this process as many times as you want which means you can fill in any number of experience details as you want and it will automatically saving to your CV.</li>
      <Image src='/img/cv.jpg' width={500} height={500}  blurDataURL="/img/blurr-min.jpg" placeholder='blur' alt="eg cv"/>
	<li>When you feel that you have filled in all the educational experience and basic details then click on the My Profile button given on the dashboard and see your profile how it looking. If everything is correct then you can click on the Download CV button given on the dashboard This will take you to the main CV page. Go to that page, scroll a little down, there you will see the download button, press it and your CV will be downloaded on your phone or laptop.</li>
</ol>
<p className='p-2'>Here the process of Download a CV ends, you do not need to pay a single penny to do all this, you can do all this for free, this will increase your online presence because you have built your profile along with making it straight. Now you can share your thoughts as a blog(soon the earning mechanism will also be released for publishers) on <strong>The ProGrad</strong> which will increase your online presence and help the recruiting agencies to hire you as well as help freshers to learn something from your useful blogs and In this way, we will build a healthy community.</p>
<p><br />
<span className='font-bold m-2 text-teal-500'>If you are facing any such problem which Indian student and job seeker have been facing commonly, then you should contact us and tell us about it, we will try our best to bring a new feature to solve it.</span></p>

<p className="m-2 pb-2">Click on the button below to start the process of creating a CV and if you have already created an account, go to the dashboard and download your CV directly</p>
    </div>
    <a href="/signup" className='bg-red-400 p-1 rounded-md lg:mx-60 my-3'>Lets Make Your CV</a>
    </section>
    </>
    )
}

export default MakeCV
