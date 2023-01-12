import React from "react";
import Harold from '../assets/developer.png'
    ;

function Portfolio() {
    return (
        <div>
            <p>this is the page for the <strong>Portfolio</strong></p>

            <h2>Card</h2>

            <div className="card">

                <div className="cardContainer">
                    <img src={Harold} alt="dev" />
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio

