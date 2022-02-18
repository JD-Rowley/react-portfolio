import React, { useState } from 'react';
import { validateEmail} from '../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    return(
        <section className="container contact-container">
            <div className="flex-container">
                <form id="contact-form" className="contact-form" action="mailto:jdrowley1989@gmail.com" method="post" encType="text/plain">
                        <label htmlFor="name">Name: </label>
                    <div>
                        <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                    </div>
                        <label htmlFor="email">Email Address: </label>
                    <div>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                    </div>
                        <label htmlFor="message">Message: </label>
                    <div className="message-container">
                        <textarea name="message" rows="5" cols="50" defaultValue={message} onChange={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" className="btn submit-btn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;