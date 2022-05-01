import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Modal from '../components/reusables/Modal';
import Link from 'next/link'


const NewsletterSubscribe = () => {
    const url ="https://theprograd.us5.list-manage.com/subscribe/post?u=2dec483651f13b3fd37cca2ac&amp;id=f6914c8ce1";


  return (
  <Modal newInterval={15000} >
  <div className="px-4 pb-3 rounded-md shadow-md">
<Link href="/signup"><a>
<h3 className="my-2 text-lg font-bold text-teal-500 ">Subscribe to Our News Letter</h3>
</a></Link>
  <p className="font-bold text-gray-500 ">We will update you whenever new updates arrive</p>
      <div className="form">
       <MailchimpSubscribe className='ring-1 ring-teal-500' url={url}/>
      </div>
  </div>
  </Modal>


  );
};

export default NewsletterSubscribe;


