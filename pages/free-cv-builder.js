import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import {APP_NAME ,DOMAIN} from '../config'

const MakeCV = () => {
    const head = () => (
        <Head>
            <title>Best Online Free Online CV Builder | The {APP_NAME}</title>
            <meta name="robots" content="index follow" />

            <meta name="description" 
            content='Make your CV free of cost and download it at th ProGrad.Make your profile on The ProGrad and download your cv easily and upload it on the job application portal.It can help you get hired.'
            />
            <link rel="canonical" href={`${DOMAIN}/free-cv-builder`} />
            <meta property="og:title" content={`Best Online Free CV Builder | The ${APP_NAME}`} />
            <meta
                property="og:description"
                content='Make your CV free of cost and download it at th ProGrad.Make your profile on The ProGrad and download your cv easily and upload it on the job application portal.It can help you get hired.'

            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/free-cv-builder`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/StuproLogo.png" />
        </Head>
    );
    return (
        <>
        {head()}
    <section className="container" >
        <h1 className="text-primary large p-1" style={{lineHeight:'2rem'}}>Free Online CV Builder</h1>
        <div className="job bg-light p-1" style={{lineHeight:'1.5rem'}}>

        <p className="text-primary lead">If you already know the process the click below button to start now</p>
        <a href="/signin" style={{textAlign:"center"}} className="btn btn-primary nbtn">Start now</a>
        <h2 className="text-dark small my-1">Make your professional CV on The ProGrad and Get hired.</h2>

<p>As you all know, if you want to apply for any job then firstly the recruiting agency will ask you for your CV and the most important thing is that your CV should look a bit professional and almost all the basic details should be covered like your experience details, educational details hobbies, skills, etc.<br />
If your CV design is perfect then HR will surely be attracted to it a little and he/she will read your CV carefully and at the very first time, he/she will decide whether he will hire you or not. We have come up with a professional-looking CV design so that you can download it absolutely free of cost but for this, we will need your details, whatever data you fill in your CV will be secure on our server, we will not share your data with anyone.</p>

<h3 className="text-danger my-1">The process of making a CV is given below, read it carefully.</h3>

<ol className="p-2">
	<li>
	<p>First of all, you have to sign up on <strong>The ProGrad</strong> and after that sign in.</p>
	</li>
	<li>
	<p>Now you will see the <span className="btn btn-primary nbtn">Dashboard</span> button on the top right corner(in mobile it is on the bottom bar), click it and go to your dashboard, here you will find the button of <span className="btn btn-primary nbtn">Update Profile</span>, click on it and fill up all the details and click on the Update button.</p>
	</li>
	<li>Now go to your own dashboard and click on <span className="btn btn-primary nbtn">Add Education</span> button and fill all the fields given in it and submit. You can repeat this process as many times as you want which means you can fill in any number of education details as you want and it will automatically saving to your CV</li>
	<li>Just like this, you will see another button in the dashboard on which <span className="btn btn-primary nbtn">Add Experience</span> is written, click it and fill up your experience details. You can repeat this process as many times as you want which means you can fill in any number of experience details as you want and it will automatically saving to your CV.</li>
      <Image src='/img/cv.jpg' width={500} height={500}  blurDataURL="/img/blurr-min.jpg" placeholder='blur'/>

	<li>When you feel that you have filled in all the educational experience and basic details then click on the My Profile button given on the dashboard and see your profile how it looking. If everything is correct then you can click on the Download CV button given on the dashboard This will take you to the main CV page. Go to that page, scroll a little down, there you will see the download button, press it and your CV will be downloaded on your phone or laptop.</li>
</ol>

<p>Here the process of Download a CV ends, you do not need to pay a single penny to do all this, you can do all this for free, this will increase your online presence because you have built your profile along with making it straight. Now you can share your thoughts as a blog(soon the earning mechanism will also be released for publishers) on <strong>The ProGrad</strong> which will increase your online presence and help the recruiting agencies to hire you as well as help freshers to learn something from your useful blogs and In this way, we will build a healthy community.</p>

<p><br />
<strong >If you are facing any such problem which Indian student and job seeker have been facing commonly, then you should contact us and tell us about it, we will try our best to bring a new feature to solve it.</strong></p>

<p className="my-1">Click on the button below to start the process of creating a CV and if you have already created an account, go to the dashboard and download your CV directly</p>
    </div>
    <a href="/signup" className="btn btn-primary nbtn">Lets Make Your CV</a>

    </section>
    </>
    )
}

export default MakeCV
