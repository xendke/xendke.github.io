import React from 'react';
import './Projects.scss';

const Link = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
)

const Projects = () => {
    return (
        <div className="Section Projects">
            <h1>Projects</h1>
            <div className="flex">
                <div className="indent">
                    <h1>Synapse</h1>
                    <p>I developed and maintained many web applications at Synapse. Here are some examples: <Link href="https://magazinediscountcenter.com/">One</Link> and <Link href="https://mdc.magazinediscountcenter.com/bizrateapptest/#/split/BIZ3306/webpromotion=20003054">Two</Link>.</p>
                </div>
                <div className="indent">
                    <h1>ShyApp</h1>
                    <p>A small social media application similar to twitter but users connect with people only through #interests. <Link href="https://shy-app-io.web.app">Demo</Link> & <Link href="https://github.com/xendke/shy-app">Code</Link>.</p>
                </div>
                <div className="indent">
                    <h1>Catchup</h1>
                    <p>An anonymous chat web app! React, SCSS, Firebase. <Link href="https://github.com/xendke/catchup">Code</Link> & <Link href="https://catchup-chat.web.app">Demo</Link>.</p>
                </div>
                <div className="indent">
                    <h1>Digitaizer</h1>
                    <p>Basic GUI and Neural Network to identify your handwritten digits! Python, Tkinter, Pandas. <Link href="https://github.com/xendke/digitaizer">Code</Link>.</p>
                </div>
                <div className="indent">
                    <h1>Pet or Not</h1>
                    <p>A simple web app that can recognize whether a pet exist in a given image! <Link href="https://github.com/xendke/pet-or-not">Code</Link> & <Link href="https://pet-or-not.herokuapp.com/">Demo</Link></p>
                </div>
                <div className="indent">
                    <h1>More</h1>
                    <p>Feel free to check out all of <Link href="https://github.com/xendke">my projects</Link> on Github!</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
