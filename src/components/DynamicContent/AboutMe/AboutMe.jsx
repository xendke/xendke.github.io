import React from 'react'
import './AboutMe.scss'

const Enhance = ({ children }) => <span className="lit">{children}</span>

const LinkIcon = () => (
	<svg
		className="link-icon"
		width="14"
		height="14"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden
	>
		<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
		<polyline points="15 3 21 3 21 9" />
		<line x1="10" y1="14" x2="21" y2="3" />
	</svg>
)

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
					<a
						href="https://www.linkedin.com/in/juanxg/"
						target="_blank"
						rel="noopener noreferrer"
						className="link-btn"
					>
						<LinkIcon />
						LinkedIn
					</a>
					<a
						href="https://github.com/xendke"
						target="_blank"
						rel="noopener noreferrer"
						className="link-btn"
					>
						<LinkIcon />
						GitHub
					</a>
					<a
						href="mailto:xendke@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="link-btn"
					>
						<LinkIcon />
						Email
					</a>
					<a
						href="https://drive.google.com/uc?export=download&id=1fH8XnV39cIDCmXGgu8LZFB27dY9cbesm"
						target="_blank"
						rel="noopener noreferrer"
						className="link-btn"
					>
						<LinkIcon />
						Resume
					</a>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
