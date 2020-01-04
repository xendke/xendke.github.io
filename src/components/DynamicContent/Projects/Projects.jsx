import React from 'react';
import './Projects.scss';

const Projects = () => {
    return (
        <div className="Section Projects">
            <h1>Projects</h1>
            <div className="flex">
                <div className="indent">
                    <h1>Synapse</h1>
                    <p>I develop and maintain many web applications at Synapse. Here are some: <a href="https://magazinediscountcenter.com/" target="_blank" rel="noopener noreferrer">One</a> and <a href="https://staging-mdc.magazinediscountcenter.com/bizrateapp/#/split/BIZ600/webpromotion=20002001" target="_blank" rel="noopener noreferrer">Two</a>.</p>
                </div>
                <div className="indent">
                    <h1>Xendke</h1>
                    <p>The website you are on right now. This app is built with React and SCSS.</p>
                </div>
                <div className="indent">
                    <h1>Catchup</h1>
                    <p>An anonymous chat web app! React, SCSS, Firebase.</p>
                </div>
                <div className="indent">
                    <h1>Digitaizer</h1>
                    <p>Basic GUI and Neural Network to identify your handwritten digits! Python, Tkinter, Pandas.</p>
                </div>
                <div className="indent">
                    <h1>Pet or Not</h1>
                    <p>A simple web app that can recognize whether a pet exist in a given picture!</p>
                </div>
                <div className="indent">
                    <h1>More</h1>
                    <p>I have way more projects, check them all out <a href="https://github.com/xendke" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;