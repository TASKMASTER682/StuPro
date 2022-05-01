import { BreadcrumbJsonLd,NextSeo } from 'next-seo';

const About =()=>{


    return(
        <>
      <NextSeo
      title='About Us'
      description="We provide Government job notifications,Private Job notifications,Free of cost study material,educational blogs and tips and tricks to crack any entrance exam"
      canonical="https://www.theprograd.com/about"

      openGraph={{
        url: 'https://www.theprograd.com/about',
        title:`About Us `,
        description:"We provide Government job notifications,Private Job notifications,Free of cost study material,educational blogs and tips and tricks to crack any entrance exam",
        images:[
        {
           url: 'https://www.theprograd.com/img/top-landing.svg',
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
          name: 'About',
          item: 'https://www.theprograd.com/about',
        }
      ]}
    />
<section className='lg:pt-20 pt-14 lg:mx-40 p-2 lg:shadow-md m-3 rounded-md lg:shadow-green-500'>
            <h1 className='text-xl font-bold m-2 text-teal-600' >
                All about The ProGrad
            </h1>
            <hr />
            <div >
                <p className='p-2'>
                Growing By leaps and bounds The ProGrad is a one-stop-shop of all that is required by an aspiring professional to be.
We bring the grads aspiring to learn and the professionals willing to contribute on one platform making the teaching and learning experience all the more productive and joyous.
From finding guidance and counseling from experts and achievers of their respective professions, by getting in touch through the community of successful professionals for career planning, to availing the strategy and study material from the exhaustive resources of the ProGrad to achieving the set goals and getting skilled for the profession of choice and getting hired, we have it all.
The proGrad assimilates all at one place and comprehensively helps the grads to plan the career and build strong foundations from the very beginning.</p>
       
            </div>
        </section>
        </>
        
    )
}
export default About;
