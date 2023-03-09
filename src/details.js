// all the details to be linked to for the site
// logo images
import logogradient from './assets/logo.svg'
import logo from './assets/logo2.svg'

// profile image
import profile from './assets/developer.png'

// tech stack images
import html from './assets/techstack/html.png'
import css from './assets/techstack/css.png'
import sass from './assets/techstack/sass.png'
import js from './assets/techstack/js.png'
import react from './assets/techstack/react.png'
import tailwind from './assets/techstack/tailwind.png'
import bootstrap from './assets/techstack/bootstrap.png'
import vscode from './assets/techstack/vscode.png'
import npm from './assets/techstack/npm.png'
import git from './assets/techstack/git.png'
import github from './assets/techstack/github.png'
import gsap from './assets/techstack/gsap.png'
import postman from './assets/techstack/postman.png'


// Project Images
import projectImage1 from './assets/project/project1.jpg'
import projectImage2 from './assets/project/project2.jpg'
import projectImage3 from './assets/project/project3.jpg'
import projectImage4 from './assets/project/project4.jpg'
import projectImage5 from './assets/project/project5.jpg' 
import projectImage6 from './assets/project/project6.jpg'

// Logos
export const logos = {
    logogradient: logogradient,
    logo: logo,
}

// Personal Details

export const personalDetails = {
    name: "James Russell",
    tagline: "Errors dont kill you they make you stronger...",
    img: profile,
    job: "Aspiring full stack dev",
    about: `I am a Junior Full Stack Developer with a passion for creating innovative web applications. I have a strong background in web development, with experience in HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am also familiar with web hosting, server-side scripting, and database management. 
    
    I have a passion for financial predictive models and have been charting stock for a decade, I got tired of manually analyzing stocks so I have committed to learning automation through different languages for the next decade. 
    
    I am always looking for ways to improve my skills and stay up to date with the latest technologies. I am currently learning python, and ML to further automation knowledge`
};

// social media urls
export const socialMediaUrl = {
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com"
}

export const workDetails = [
    {
        Position: "freelance",
        Company: "handyfixer",
        Location:"Australia",
        Type:"Full time",
        Duration:"February 2023 - current",
    },


];

// Education details
export const eduDetails = [
    {
        Position: "Full stack developer",
        University: "Monash University",
        Location: "Online",
        Type: "bootcamp",
        Duration: "August 2022 - February 2023",
    },

];

// Tech Stack and Tools
export const techStackDetails = {
    html: html,
    css: css,
    js: js,
    react: react,
    sass: sass,
    tailwind: tailwind,
    bootstrap: bootstrap,
    vscode: vscode,
    npm: npm,
    git: git,
    github: github,
    gsap: gsap,
    postman: postman

}

// dummy project details
export const projectDetails = [
{
    title: "STOCK full stack application",
    image: projectImage1,
    description: `stock screening application that downloads new close price daily and then allows the user to search baised on existing strategies. 
    
    work in progress.`,
    techstack: "Jinja templates, sematic ui, python",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

  {
    title: "booking.com clone",
    image: projectImage2,
    description: `clone of booking.com. turned it into a rehabilitation clinic site for opioid users in the USA. 
    
    credit to youtuber lamadev for original`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

  {
    title: "",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

  {
    title: "Project title 2",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

  {
    title: "Project title 2",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },

  {
    title: "Project title 2",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
]

// Contact Details
export const contactDetails = {
    email: 'james.anthony.russell36@gmail.com',
    discord: "chartradamus#9765"
}