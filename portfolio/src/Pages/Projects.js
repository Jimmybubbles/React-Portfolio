import React from "react";
import Project from "../Components/Project"
import { projectDetails } from "../details";

function Projects() {
    return (
        <main>
            <section>
                <h1>Projects</h1>
                <div>
                    {React.Children.toArray(
                        projectDetails.map(
                            ({title, image, description, techstack, previewlink, githubLink}) => {
                                <Project
                                title={title}
                                image={image}
                                descirption={description}
                                techstack={techstack}
                                previewLink={previewlink}
                                githubLink={githubLink}
                               />     
                            }
                        )
                    )}
                </div>
            </section>
        </main>
    )
}

export default Projects