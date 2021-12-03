import React, { useState } from 'react';
import { validateEmail} from '../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
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

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1>Contact Me:</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="flex-container">
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address: </label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="btn submit-btn">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;