import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Style from './Contact.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact(props) {
    const initialValues = {uname: "", email: "", message: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);
    const notify = (message) => toast.error(message);
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
        if(errors?.uname) {
            notify(errors?.uname);
        } else if(errors?.email) {
            notify(errors?.email);
        } else {
            notify(errors?.message);
        }
        return errors;
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
    }
    const sendEmail = async () => {
        const result = await emailjs.send("service_tkbymwc", "template_2ykc3kl", {
            uname: formValues.uname,
            email: formValues.email,
            message: formValues.message
        }, {
            publicKey: 'K_qZ4gdVuX6M76opX'
        });
        if(result?.status === 200) {
            Swal.fire({
                title: "Success!",
                text: "Email sent successfully!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Oops...",
                text: "Email not sent!",
                icon: "error"
            });
        };
        setFormValues(initialValues);
    }
    useEffect(() => {
        if(Object.keys(formErrors).length === 0) {
            sendEmail();
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
                        <form className={Style.form} onSubmit={(e) => onSubmit(e)}>
                            <div>
                                <label htmlFor='Name'></label>
                                <input type='text' name='uname' placeholder='Your name' className={Style.input} value={formValues.uname} onChange={handleChange}></input>
                            </div>
                            <div>
                                <label htmlFor='Email'></label>
                                <input type='text' name='email' placeholder='Your email' className={Style.input} value={formValues.email} onChange={handleChange}></input>
                            </div>
                            <div>
                                <label htmlFor='Message'></label>
                                <textarea type='text' name='message' rows={6} placeholder='Your message' className={Style.textarea} value={formValues.message} onChange={handleChange}></textarea>
                            </div>
                            <div>
                                <button className={Style.button}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer className={Style.error}/>
        </>
    );
};

export default Contact;