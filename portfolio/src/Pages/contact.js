import React from "react";
import { contactDetails } from "../details";

function Contact() {
    const {email, discord} = contactDetails;
    return(
        <main className="container mx-auto max-width section">
            <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
            For any questions email or add on discord.    
            </h1>
            <h3 className="text-center text-3x1 md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-f md:pt-10 md:pb-6">
                <a href={`mailto:${email}`}>{email}</a>
            </h3>
            <span className="text-center text-content text-xl font-light block">or</span>
            <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold">
                <a href={`tel:${discord}`}>{discord}</a>
            </h3>
        </main>
    )
}

export default Contact;