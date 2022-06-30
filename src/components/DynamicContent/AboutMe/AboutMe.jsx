import React from 'react'
import './AboutMe.scss'
import githubIcon from 'assets/github.svg'
import twitterIcon from 'assets/twitter.svg'
import linkedinIcon from 'assets/linkedin.svg'

const AboutMe = () => {
	return (
		<div className="Section AboutMe">
			<h1>About Me</h1>
			<div className="indent">
				<p>
					Hello, my name is Juan Xavier Gomez. I'm a software
					engineer! I love working with smart and diverse individuals.
					Most of the time I create visually appealing interfaces with
					the latest web technologies but I am comfortable enough to
					work on the entire stack!
				</p>
				<p>React, GraphQL, SCSS, Node, Python, Ruby and more!</p>
				<div className="links">
					<a href="https://www.linkedin.com/in/juanxg/">
						<div className="linkLogoContainer">
							<img src={linkedinIcon} alt="LinkedIn Icon Link" />
						</div>
						<span>LinkedIn</span>
					</a>
					<a href="https://github.com/xendke">
						<div className="linkLogoContainer">
							<img src={githubIcon} alt="GitHub Icon Link" />
						</div>
						<span>GitHub</span>
					</a>
					<a href="https://twitter.com/xendke">
						<div className="linkLogoContainer">
							<img src={twitterIcon} alt="Twitter Icon Link" />
						</div>
						<span>Twitter</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
