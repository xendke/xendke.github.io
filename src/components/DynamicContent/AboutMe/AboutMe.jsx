import React from 'react';
import './AboutMe.scss';
import githubIcon from 'assets/github.svg';
import twitterIcon from 'assets/twitter.svg';
import linkedinIcon from 'assets/linkedin.svg';

const AboutMe = () => {
    return (
        <div className="Section AboutMe">
            <h1>About Me</h1>
            <div className="indent"> 
                <p>Hello, my name is Juan Xavier Gomez and I love creating and tinkering! I'm a front end engineer. I usually work with React, SCSS, Redux, etc. I also love working with Node and Python! I am currently working at FanDuel where my team and I maintain international products.</p>
                <div className="links">
                    <a href="https://www.linkedin.com/in/juanxg/">
                        <div className="linkLogoContainer">
                            <img src={linkedinIcon} alt="LinkedIn Icon Link"/>
                        </div>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/xendke">
                        <div className="linkLogoContainer">
                            <img src={githubIcon} alt="GitHub Icon Link"/>
                        </div>
                        <span>GitHub</span>
                    </a>
                    <a href="https://twitter.com/xendke">
                        <div className="linkLogoContainer">
                            <img src={twitterIcon} alt="Twitter Icon Link"/>
                        </div>
                        <span>Twitter</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;