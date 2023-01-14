import React from "react";

function Project({ title, image, descirption, techstack, previewLink, githubLink }) {
    return (
        <article>
            <img scr={image} alt="" Loading="lazy" />
            <div>
                <h1>{title}</h1>
                <p>{descirption}</p>
                <h3>
                    Tech Stack : <span>{techstack}</span>
                </h3>
                <div>
                    <div>
                        <svg>


                        </svg>
                        <a href={previewLink}>

                        </a>
                    </div>
                </div>

            </div>
        </article>
    )
}

export default Project;