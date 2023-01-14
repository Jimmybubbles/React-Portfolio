import React from "react";

function Work({ position, company, location, type, duration}) {

    return (
        <article>
            <div>
                <h1>{position}</h1>
                <div>{type}</div>
            </div>

        <div>
            <div>
                <div>
                    <svg>

                    </svg>
                    <p>{company}</p>
                </div>
                <div>
                    <svg>

                    </svg>
                    <p>{location}</p>
                </div>
            </div>
            <p>{duration}</p>
        </div>

        </article>
    )

}

export default Work;