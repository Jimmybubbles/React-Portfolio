import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('AboutMe')

    // The renderPage method uses a switch statement to render the appropriate current page.
    const renderPage = () => {
        switch (currentPage) {
            case "AboutMe":
                return <AboutMe />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;

            default:
                return <AboutMe />;
        }
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <a
                    className='navbar-item'
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com"
                    >
                     <span className='content is-large'>James</span>   
                    </a>
                </div>
            </nav>
            {/* Pass the state value and the setter as propts to the NavTabs */}
            <Navigation
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
            {/*Call the renderPage function passing in the currentPage */}
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    )

}

export default Header;

