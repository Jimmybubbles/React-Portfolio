import React from "react";
import Work from "../Components/Work"
import { personalDetails, workDetails, eduDetails } from "../details";

function About() {
    return (
        <main>
            <section>
                <h1>About Me</h1>
                <p>{personalDetails.about}</p>
            </section>

            <section>
                <h1>Work Experience</h1>
                {React.Children.toArray(
                    workDetails.map(({Position, Company, Location, Type, Duration}) => {
                        return (
                        <Work
                        position={Position}
                        company={Company}
                        Location={Location}
                        type={Type}
                        duration={Duration}
                        />
                        )
                    })
                )}
            </section>

            <section>
                <h1>Education</h1>
                {React.Children.toArray(
                    eduDetails.map(({ Position, Company, Location, Type, Duration}) => {
                        return(
                        <Work
                        position={Position}
                        company={Company}
                        location={Location}
                        type={Type}
                        duration={Duration}
                        />
                        )
                    })
                    
                )}
            </section>
        </main>
    );
}

export default About;