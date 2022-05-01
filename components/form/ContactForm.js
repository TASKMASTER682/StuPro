import React ,{ useState } from 'react';
import { emailContactForm } from '../../actions/form';


const ContactForm = ({authorEmail}) => {
    const [values, setValues] = useState({
        message: '',
        name: '',
        email: '',
        sent: false,
        buttonText: 'Send Message',
        success: false,
        error: false
    });

    const { message, name, email, sent, buttonText, success, error } = values;

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, buttonText: 'Sending...' });
        emailContactForm({authorEmail, name, email, message }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: '',
                    email: '',
                    message: '',
                    buttonText: 'Sent',
                    success: data.success
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value, error: false, success: false, buttonText: 'Send Message' });
    };

    const showSuccessMessage = () => success && <div className='p-3 bg-teal-300 rounded-md'>Thank you for contacting us.</div>;

    const showErrorMessage = () => (
        <div className='p-3 bg-red-400 rounded-md' style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
    const contactForm = () => {
        return (
            <form onSubmit={clickSubmit} className="p-2 mb-4 rounded-md shadow-md shadow-green-400">
              
                   
                    <textarea
                        onChange={handleChange('message')}
                        className='ring-1 ring-teal-500 rounded-md p-3 w-[100%]'
                        value={message}
                        placeholder="Type your message here..."
                        required
                        rows="10"
                    ></textarea>
               

                <div className='flex flex-col'>
                   <label className='m-2 text-sm text-teal-400'>Name</label>
                    <input type="text" onChange={handleChange('name')} autoComplete='false' className='p-2 rounded-md ring-1 ring-teal-400'  value={name} placeholder="Type Your Name" required />
                </div>

                <div className='flex flex-col'>
                    <label className="m-2 text-sm text-teal-400">Email</label>
                    <input
                        type="email"
                        onChange={handleChange('email')}
                        className="p-2 rounded-md ring-1 ring-teal-400"
                        placeholder="Type Your Email"
                        value={email}
                        autoComplete='false'
                        required
                    />
                </div>

                <div>
                    <button className='p-2 my-4 font-bold text-white bg-teal-700 rounded-md'>{buttonText}</button>
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
        <div>
         {showSuccessMessage()}
         {showErrorMessage()}
        
        </div>
            {contactForm()}
        </React.Fragment>
    );
};

export default ContactForm;