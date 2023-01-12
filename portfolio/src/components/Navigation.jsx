import React from "react";

// clickable tabs that take you to sections.


function Navigation(props) {
    const tabs = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

    return (
    
    <div className="tab">
        <ul className="nav-tabs">
            {tabs.map((tab) => (
                <li className= { props.currentPage === tab ? "nav-item is-active" : "nav-item"} key={tab}>
                    
                <a href={"#" + tab.toLowerCase()}
                // whenever the tab is clicked on.
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange(tab)}
                className={
                    props.currentPage === tab ? "nav-link active" : "nav-link"
                }
                >
                    {tab}
                </a>
                </li>
            ))}
        </ul>    
    </div>
    
    );
}

export default Navigation;