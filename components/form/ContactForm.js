import { useState } from 'react';
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

    const showSuccessMessage = () => success && <div className=" p-1 nbtn badge badge-success">Thank you for contacting us.</div>;

    const showErrorMessage = () => (
        <div className=" p-1 nbtn badge badge-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
    const contactForm = () => {
        return (
            <form onSubmit={clickSubmit} className="form">
                <div className="form-group">
                   
                    <textarea
                        onChange={handleChange('message')}
                        type="text"
                        className=" blog textinput"
                        value={message}
                        placeholder="Type your message here..."
                        required
                        rows="10"
                    ></textarea>
                </div>

                <div className="form-group">
                   <label className="extra-small">Name</label>
                    <input type="text" onChange={handleChange('name')} className="form-control"  value={name} placeholder="Type Your Name" required />
                </div>

                <div className="form-group">
                    <label className="extra-small">Email</label>
                    <input
                        type="email"
                        onChange={handleChange('email')}
                        className="form-control"
                        placeholder="Type Your Email"
                        value={email}
                        required
                    />
                </div>

                <div>
                    <button className="btn nbtn btn-primary">{buttonText}</button>
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