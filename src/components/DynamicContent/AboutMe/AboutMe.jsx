import React from 'react'
import './AboutMe.scss'
import githubIcon from 'assets/github.svg'
import twitterIcon from 'assets/twitter.svg'
import linkedinIcon from 'assets/linkedin.svg'

const Enhance = ({ children }) => <span className="lit">{children}</span>

const AboutMe = () => {
	return (
		<div className="Section AboutMe">
			<h1>About Me</h1>
			<div className="indent">
				<p>
					I'm a <Enhance>software engineer</Enhance> with strong front-end expertise and working experience in backend development.
					I enjoy building <Enhance>visually engaging interfaces</Enhance> and highly polished features, and I thrive
					in collaborative environments where I can work alongside smart, diverse teams.
				</p>
				<p>
					I'm also excited about leveraging <Enhance>AI tools</Enhance> and integrating
					intelligent systems to build more innovative and efficient solutions.
				</p>
				<div className="links">
					<a href="https://www.linkedin.com/in/juanxg/">
						<div className="linkLogoContainer">
							<img src={linkedinIcon} alt="LinkedIn Icon Link" />
						</div>
						<span className="linkLabel">LinkedIn</span>
					</a>
					<a href="https://github.com/xendke">
						<div className="linkLogoContainer">
							<img src={githubIcon} alt="GitHub Icon Link" />
						</div>
						<span className="linkLabel">GitHub</span>
					</a>
					<a href="https://twitter.com/xendke">
						<div className="linkLogoContainer">
							<img src={twitterIcon} alt="Twitter Icon Link" />
						</div>
						<span className="linkLabel">Twitter</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
