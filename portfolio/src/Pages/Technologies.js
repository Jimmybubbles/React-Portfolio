import React from "react";
import { techStackDetails } from "../details"

function Technologies() {
    const {
        html,
        css,
        js,
        react,
        tailwind,
        bootstrap,
        sass,
        vscode,
        git,
        github,
        npm,

    } = techStackDetails;

    return (
        <main>
            <section>
                <h1>
                    Tech Stack
                </h1>
                <p>
                    Technologies I've been working with recently
                </p>
            </section>

            <section>
                <img scr={html} title="html" alt="" />
                <img scr={css} title="css" alt="" />
                <img scr={js} title="js" alt="" />
                <img scr={react} title="react" alt="" />
                <img scr={tailwind} title="tailwind" alt="" />
                <img scr={bootstrap} title="bootstrap" alt="" />
                <img scr={sass} title="sass" alt="" />
            </section>

            <section>
                <h1>Tools</h1>
            </section>

            <section>
                <img scr={vscode} title="vscode" alt="" />
                <img scr={git} title="git" alt="" />
                <img scr={github} title="github" alt="" />
                <img scr={npm} title="npm" alt="" />
            </section>
        </main>
    )
}

export default Technologies;