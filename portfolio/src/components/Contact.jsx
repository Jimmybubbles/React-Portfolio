// contact form with fields 
// name
// email
// message


// WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
// WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address

import React, { useState } from "react";
import  { validateEmail } from "../utils/helpers"
import '../index.css';


function ContactForm() {

const [formState, setFormState] = useState({ 
        name: '', 
        email: '', 
        message: '' 
    });

const [errorMessage, setErrorMessage] = useState('')

const { name, email, message } = formState;

// logic for event trigger to check the email is valid

const handleChange = (e) => {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid)
        // isValid conditional statement
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }

    } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
    }
    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
}

console.log(formState);


return (
    // contact me html mark up.
    <div>
        <p>Contact Me</p>
        <hr />
        <form>

            <div>
                <label>Name</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" />
            </div>
            <div>
                <label>Message</label>
                <textarea type="text" name="message" />
            </div>

            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button>Submit</button>
        </form>
    </div>
)

}


export default ContactForm