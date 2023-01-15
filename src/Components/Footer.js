import React from "react";

function Footer() {
    return (
        <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
            <p className="text-xs text-center text-dark-content">coded by {" "}
            <a href="http://google.com">
            James Russell
            </a>
            </p>
        </footer>
    )
}

export default Footer;