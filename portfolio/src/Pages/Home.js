import React, { useEffect, useRef } from "react";
import gsap from "gasp";
import { personalDetails } from "../details";

function Home() {
    const { name, tagline, img } = personalDetails;
    const h11 = useRef();
    const h12 = useRef();
    const h13 = useRef();
    const myimageref = useRef();
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(
            h11.current,
            {
                x: "-100%",
                delay: 0.8,
                opacity: 0,
                duration: 2,
                ease: "Power3.easeOut",
            },
            "<"
        )
            .from(
                h12.current,
                {
                    x: "-100%",
                    delay: 0.8,
                    opacity: 0,
                    duration: 2,
                    ease: "Power3.easeOut",
                },
                "<"
            )

            .from(
                h13.current,
                {
                    x: "-100%",
                    delay: 0.1,
                    opacity: 0,
                    duration: 2,
                    ease: "Power3.easeOut",
                },
                "<"
            )

            .from(
                myimageref.current,
                {
                    x: "-100%",
                    delay: 0.1,
                    opacity: 0,
                    duration: 2,
                    ease: "Power3.easeOut",
                },
                "<"
            );
    }, []);

    return (
        <main>
            <div>
                <h1>Hi,👋<br></br>My name is<br></br></h1>
                <h1>{name}</h1>
                <h2>{tagline}</h2>
            </div>
            <div>
                <img ref={myimageref} src={img} />
            </div>
        </main>
    )

}

export default Home;