import React from "react";
import { contactDetails } from "../details";

function Contact() {
    const {email, discord} = contactDetails;
    return(
        <main>
            <h1>
            For any questions email or add on discord.    
            </h1>
            <h3>
                <a href={`mailto:${email}`}>{email}</a>
            </h3>
            <span>or</span>
            <h3>
                <a href={`tel:${discord}`}>{discord}</a>
            </h3>
        </main>
    )
}

export default Contact;