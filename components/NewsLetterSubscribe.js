import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Modal from '../components/reusables/Modal';
import Link from 'next/link'


const NewsletterSubscribe = () => {
    const url ="https://theprograd.us5.list-manage.com/subscribe/post?u=2dec483651f13b3fd37cca2ac&amp;id=f6914c8ce1";


  return (
  <Modal newInterval={15000} >
  <div className="study-home-card p-1" style={{margin:'0rem 1rem 1rem 1rem'}}>
<Link href="/signup"><a>
<h3 className="small text-primary ">Subscribe to Our News Letter</h3>
</a></Link>
  <p className="extra-small my-1">We will update you whenever new updates arrive</p>
      <div className="form">
       <MailchimpSubscribe url={url}/>
      </div>
  </div>

  </Modal>


  );
};

export default NewsletterSubscribe;


