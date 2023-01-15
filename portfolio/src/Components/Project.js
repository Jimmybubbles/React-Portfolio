import React from "react";

function Project({ title, image, descirption, techstack, previewLink, githubLink }) {
    return (
        <article className= "rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
            <img scr={image} alt="test" Loading="lazy" />
            <div className="dark:bg-dark-card p-4">
                <h1 className="dark:text-light-heading front-semibold text-lg pt-1">{title}</h1>
                <p className="text-content pt-4 font-light">{descirption}</p>
                <h3 className="text-dark-heading dark:text-light-heading front-medium pt-4">
                    Tech Stack : <span className="font-light">{techstack}</span>
                </h3>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center">
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