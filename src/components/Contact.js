import { useEffect, useState } from 'react';
import Style from './Contact.module.css';

function Contact(props) {
    const initialValues = {uname: "", email: "", message: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        setFormErrors({...formErrors, [name]: ''});
    }
    const validate = (values) => {
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!values.uname) {
            errors.uname = "Your name is required!";
        }
        if(!values.email) {
            errors.email = "Your email is required!";
        } else if(!regex.test(values.email)) {
            errors.email = "Invalid email!";
        }
        if(!values.message) {
            errors.message = "Message is required!";
        }
        return errors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
    }
    useEffect(() => {
        if(Object.keys(formErrors).length === 0) {
            setFormValues(initialValues);
        }
    }, [formErrors]);
    return (
        <>
            <div ref={props.contact} className={Style.contactContainer}>
                <div className={Style.container}>
                    <div className={Style.firstContainers}>
                        <h1 className={Style.heading}>Let's discuss</h1>
                        <h1 className={Style.heading}>on something <span className='text-[#a8107c]'>cool</span> together</h1>
                        <p className={Style.para}>Send me a email!</p>
                    </div>
                    <div className={Style.secondContainers}>
                        <form className={Style.form} onSubmit={(e) => handleSubmit(e)}>
                            <div>
                                <label htmlFor='Name'></label>
                                <input type='text' name='uname' placeholder='Your name' className={Style.input} value={formValues.uname} onChange={handleChange}></input>
                                <p className='mx-6 text-red-600 font-semibold pt-1'>{formErrors?.uname}</p>
                            </div>
                            <div>
                                <label htmlFor='Email'></label>
                                <input type='text' name='email' placeholder='Your email' className={Style.input} value={formValues.email} onChange={handleChange}></input>
                                <p className='mx-6 text-red-600 font-semibold pt-1'>{formErrors?.email}</p>
                            </div>
                            <div>
                                <label htmlFor='Message'></label>
                                <textarea type='text' name='message' rows={6} placeholder='Your message' className={Style.textarea} value={formValues.message} onChange={handleChange}></textarea>
                                <p className='mx-6 text-red-600 font-semibold pt-1'>{formErrors?.message}</p>
                            </div>
                            <div>
                                <button className={Style.button}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;