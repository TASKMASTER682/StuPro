import Link from 'next/link';
import Image from 'next/image';
import { DOMAIN } from '../config';
import dynamic from 'next/dynamic';
const JobHome = dynamic(async () => import('./jobs/JobHome'));
const Messenger = dynamic(async () => import('../components/reusables/Messenger'), { loading: () => <i>...</i>, ssr: false });
const ListAdmitCard = dynamic(async () => import('./jobs/AdmitCard'));
const ListResult = dynamic(async () => import('./jobs/Result'));
const SecurityIcon = dynamic(async () => import('@material-ui/icons/Security'), { loading: () => <i>...</i>, ssr: false });
const AccountBalanceIcon = dynamic(async () => import('@material-ui/icons/AccountBalance'),{ loading: () => <i>...</i>, ssr: false });
const LocalHospitalIcon = dynamic(async () => import('@material-ui/icons/LocalHospital'),{ loading: () => <i>...</i>, ssr: false });
const SettingsIcon = dynamic(async () => import('@material-ui/icons/Settings'),{ loading: () => <i>...</i>, ssr: false });
const GavelIcon = dynamic(async () => import('@material-ui/icons/Gavel'), { loading: () => <i>...</i>, ssr: false });
const FilterHdrIcon = dynamic(async () => import('@material-ui/icons/FilterHdr'), { loading: () => <i>...</i>, ssr: false });
const TrainIcon = dynamic(async () => import('@material-ui/icons/Train'), { loading: () => <i>...</i>, ssr: false });
const FacebookIcon = dynamic(async () => import('@material-ui/icons/Facebook'), { loading: () => <i>...</i>, ssr: false });
const InstagramIcon = dynamic(async () => import('@material-ui/icons/Instagram'), { loading: () => <i>...</i>, ssr: false });
const TelegramIcon = dynamic(async () => import('@material-ui/icons/Telegram'), { loading: () => <i>...</i>, ssr: false });
const YouTubeIcon = dynamic(async () => import('@material-ui/icons/YouTube'), { loading: () => <i>...</i>, ssr: false });

// const DisplayAd =dynamic(async ()=>import('./ads/DisplayAd'),{ssr:false}) ;
const Landing = ({ jobs, privateJobs,result,admitCard }) => {
    const myLoader = (src) => {
        return `${DOMAIN}/img/${src}`
    }
    return (
        <>
            <section className="landing " >
                <div className=" big-card p-2 input-box">
                    <div>
                        <ul>
                            <li><h2 className='large text-primary my-2'><span className='text-danger'>The</span> ProGrad</h2> </li>
                            <br />
                            <li> <h3 className=' text-dark  m-1'> A Platform Bringing Aspiring Grads And Excelling Professionals Togather.</h3></li>
                            <li> <h3 className=" text-dark m-1"> A Community That Has A Perfect Ecosystem For Every Niche Of <span className="text-danger">Education System.</span> </h3></li>
                            <li> <h3 className=" text-dark m-1"> A Perfect Indian platform to find <span className="text-danger">Govt Jobs ,Private Jobs , Work from home and instatnt Jobs</span> </h3></li>

                        </ul>

                        <a href="/signin" className="btn btn-dark input-box my-1">Get Started</a>

                        <h3 className="small text-success my-1">Top Job Categories</h3>
                        <marquee behaviour='scroll' direction="right" height="100px" width="80%">
                                <Link href="/jobCategories/defence"><a><SecurityIcon className="m-1" style={{ fontSize: 50 }} /></a></Link>
                                <Link href="/jobCategories/banking"><a><AccountBalanceIcon className="m-1" style={{ fontSize: 50 }} /></a></Link>
                                <Link href="/jobCategories/medical"><a><LocalHospitalIcon className="m-1" style={{ fontSize: 50 }} /></a></Link>
                                <Link href="/jobCategories/engineering"><a><SettingsIcon className="m-1" style={{ fontSize: 50 }} /></a></Link>
                                <Link href="/jobCategories/law"><a><GavelIcon className="m-1" style={{ fontSize: 50 }} /></a></Link>
                                <Link href="/jobCategories/jandk-jobs"><a><FilterHdrIcon className="m-1" style={{ fontSize: 50 }} /></a></Link>
                                <Link href="/jobCategories/raileway"><a><TrainIcon className="m-1" style={{ fontSize: 50 }} /></a></Link>
                        </marquee>
                    </div>

                    <div className="p-1">

                        <Image loader={()=>myLoader('stupro2.png')} className="my-1" src='/img/stupro2.png' width={700} height={400}  alt="The ProGrad" placeholder='blur' blurDataURL='/img/blurr-min.jp' />
                        <ul className=" p-1 share">
                            <li><a href="https://www.instagram.com/theprograd/" rel='noopener noreferrer' target="_blank"><InstagramIcon className="text-success" style={{ fontSize: 35 }} /></a></li>
                            <li><a href="https://www.facebook.com/sayed.anwarulhaq.923" target="_blank" rel='noopener noreferrer'><FacebookIcon className="text-success" style={{ fontSize: 35 }} /></a></li>
                            <li><a href="https://t.me/theprograd" target="_blank" rel='noopener noreferrer'><TelegramIcon className="text-success" style={{ fontSize: 35 }} /></a></li>
                            <li><a href="https://youtube.com/channel/UCFGm2Nfoqs0G29E38B1GZxw" target="_blank" rel='noopener noreferrer'><YouTubeIcon className="text-success" style={{ fontSize: 35 }} /></a></li>

                        </ul>
                    </div>
                </div>
            </section>

            <section className="section-two my-1">
                    <h2 className="large text-danger my-1">Latest Updates</h2>
                    <div className=" my-1 p-1">
                    <h2 className="text-primary">Government Jobs</h2>
                <div className="card p-2">
                <JobHome newRoute='job'  jobs={jobs} />
                <div className="home-card p-5 my-1"><a className="small" href="/jobs">See more</a></div>
                </div>
                <div className='container admit-card'>
                <div className="job p-1">
                <h2 className="text-primary">Admit Cards</h2>
                <hr className="my-1 hr-1 " />

                    <ListAdmitCard  admitCard={admitCard} />
                </div>
                <div className="job p-1">
                <h2 className="text-primary">Results</h2>
                <hr className="my-1 hr-1 " />

                    <ListResult result={result} />
                </div>
                </div>
                <h2 className="text-danger my-1">Private Jobs</h2>

                <div className="card p-2">
                <JobHome newRoute='privateJob' jobs={privateJobs} />
                <div className="home-card p-5 my-1"><a className="small" href="/privateJobs">See more</a></div>
                </div>
                    </div>
                <div className="bg-primary p-1 my-1">
                    <h2 className="large">Our Services</h2>
                </div>
                <div className="services">
                <div className="service-item-1 p-2">
                        <div>
                            <h3 className="small text-primary my-1">Governement Job Notifications</h3>
                            <p className="input-box p-1"> Here you will get daily government Job updates as well as private job updates and instant job suggestions.If you will subscribe to our newsletter then it will be more easy for you to reach us directly from your gmail,As we will send you job updates on daily basis...Happy</p>
                        </div>
                        <div className="p-2">
                        <Image loader={()=>myLoader('briefcase.png')}  className="my-1" src='/img/briefcase.png' width={150} height={150} blurDataURL="/img/blurr-min.jpg" alt="The ProGrad" placeholder='blur'  />
                        </div>
                    </div>
                    <div className="service-item p-2">
                    <div className="p-2">
                        <Image loader={()=>myLoader('idea.png')}  className="my-1" src='/img/idea.png' width={150} height={150} blurDataURL="/img/blurr-min.jpg" alt="The ProGrad" placeholder='blur' />
                        </div>
                        <div>
                            <h3 className="small text-primary my-1">Resources Study Material</h3>
                            <p className="input-box p-1">The study material ranges from elementary studies (6th 7th 8th 9th 10th class study material) to study material for job seekers.For elementary studies, we have our special edition of material for concept clarity.Whereas for the jobseekers and various competitive examinations such as UPSC examinations, state PSC (PCS), SSC, railways, engineering services, defense services exams we provide the study materials from various credible resources such as resonance study material Akash study material for NEET. Soon the study material in Hindi will also be provided.
</p>
                        </div>
                    </div>
                    <div className="service-item-1 p-2">
                        <div>
                            <h3 className="small text-primary my-1">Books</h3>
                            <p className="input-box p-1"> Books and other reference materials can be availed and downloaded for free e.g. the NCERT PDFs, the state board books pdf as well as other competitive exam books pdf along with the notes.</p>
                        </div>
                        <div className="p-2">
                        <Image loader={()=>myLoader('book.png')} className="my-1" src='/img/book.png' width={150} height={150}  alt="The ProGrad" placeholder='blur' blurDataURL='/img/blurr-min.jp' />
                        </div>

                    </div>
                    <div className="service-item p-2">
                    <div className="p-2">
                        <Image loader={()=>myLoader('movie-player.png')} className="my-1" src='/img/movie-player.png' width={150} height={150}  alt="The ProGrad" placeholder='blur' blurDataURL='/img/blurr-min.jp' />
                        </div>              
                         <div>
                            <h3 className="small text-primary my-1">Videos</h3>
                            <p className="input-box p-1">The ProGrad is the YouTube of education where motivated educational content creators are provided the platform for free which can be availed by the learners at their fingertips to have a heavenly learning experience.</p>
                        </div>
                    </div>
                    <div className="service-item-1 p-2">
                        <div>
                            <h3 className="small text-primary my-1">Courses</h3>
                            <p className="input-box p-1">For sufficiently qualified professionals the ProGrad provides an option to create specifically designed courses and study materials and conducted classes.</p>
                        </div>
                        <div className="p-2">
                        <Image loader={()=>myLoader('online-course.png')}  className="my-1" src='/img/online-course.png' width={150} height={150}  alt="The ProGrad" placeholder='blur' blurDataURL='/img/blurr-min.jp' />
                        </div>

                    </div>
                    <div className="service-item p-2">
                    <div className="p-2">
                        <Image loader={()=>myLoader('test.png')}  className="my-1" src='/img/test.png' width={150} height={150}  alt="The ProGrad" placeholder='blur' blurDataURL='/img/blurr-min.jp' />
                        </div>                       
                         <div>
                            <h3 className="small text-primary my-1">Test Series</h3>
                            <p className="input-box p-1">To assess whether you are on the right course of Your preparation the ProGrad provides tailor-made tests for specific exams. Take the online tests and be prepared. </p>
                        </div>
                    </div>
                    <div className="service-item-1 p-2">
                        <div>
                            <h3 className="small text-primary my-1">Create Your Profile</h3>
                            <p className="input-box p-1">with the help of our free CV building tool, ProGrads can build a fabulous CV or free and get hired for the job of your dreams from our network.</p>
                        </div>
                        <div className="p-2">
                        <Image loader={()=>myLoader('resume.png')}  className="my-1" src='/img/resume.png' width={150} height={150}  alt="The ProGrad" placeholder='blur' blurDataURL='/img/blurr-min.jp' />
                        </div>

                    </div>
                    <div className="service-item p-2">
                    <div className="p-2">
                        <Image loader={()=>myLoader('hired.png')}  className="my-1" src='/img/hired.png' width={150} height={150}  alt="The ProGrad" placeholder='blur' blurDataURL='/img/blurr-min.jp' />
                        </div>                        <div>
                            <h3 className="small text-primary my-1">Get Hired</h3>
                            <p className="input-box p-1">The platform provides you a unique opportunity to grow your profile with The ProGrad and feature on the top priority list of the hiring parties for job openings of your choice and Get Hired</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-danger my-2 large">Our Vision</h2>

                <div className="services">
                    <p className="input-box p-1">
                    <strong>A highly skilled Indian youth who are not just employed but employment generators as well, not dependent but dependable.Chisel the Grads of India to be The ProGrads, help them become the Nation-builders.</strong>
                    </p>
                </div>
                <h3 className="text-primary small my-2">Job Posting Packs</h3>
                <div className="services p-2">
                    <p><strong>Currently ,The Job Posting is totally Free.To Post a Job on The ProGrad Just contact us on whatsapp,facebook or just click contact us button.Your Job will be posted free of cost</strong></p>
                </div>
                <h3 className="text-primary large my-2">Sponsered Content</h3>
                <div className="services p-2">
                    <p><strong>We are also accepting sponsered content.To advertise your post on The ProGrad,Just contact us and send your post link ,title and descrption. </strong></p>
                </div>
            </section>


<Messenger />

        </>
    )
}


export default Landing;




