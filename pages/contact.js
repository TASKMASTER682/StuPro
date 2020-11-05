import ContactForm from '../components/form/ContactForm';

const Contact = () => {
    return (
        
            <div className="container">
                 <h2 className="text-primary large">Contact form</h2>
                 <p className="extra-small text-light-gray">If you have any query regrading Site, Advertisement and any other issue, please feel free to contact us</p>
                        <div className="line"></div>
                        <ContactForm />
            </div>
        
    );
};

export default Contact;