import React from 'react'
import './Projects.scss'

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
					<h2>Synapse</h2>
					<p>
						I developed and maintained many web applications at
						Synapse. Here are some examples:{' '}
						<Link href="https://magazinediscountcenter.com/">
							One
						</Link>{' '}
						and{' '}
						<Link href="https://mdc.magazinediscountcenter.com/bizrateapptest/#/split/BIZ3306/webpromotion=20003054">
							Two
						</Link>
						.
					</p>
				</div>
				<div className="indent">
					<h2>Mousy</h2>
					<p>
						A small social media application similar to twitter but
						users connect with people only through #interests.{' '}
						<Link href="https://mousy-xendke.vercel.app/">
							Demo
						</Link>{' '}
						&{' '}
						<Link href="https://github.com/xendke/mousy">Code</Link>
						.
					</p>
				</div>
				<div className="indent">
					<h2>Catchup</h2>
					<p>
						An anonymous chat web app! React, SCSS, Firebase.{' '}
						<Link href="https://github.com/xendke/catchup">
							Code
						</Link>{' '}
						& <Link href="https://catchup-chat.web.app">Demo</Link>.
					</p>
				</div>
				<div className="indent">
					<h2>Digitaizer</h2>
					<p>
						Basic GUI and Neural Network to identify your
						handwritten digits! Python, Tkinter, Pandas.{' '}
						<Link href="https://github.com/xendke/digitaizer">
							Code
						</Link>
						.
					</p>
				</div>
				<div className="indent">
					<h2>Pet or Not</h2>
					<p>
						A simple web app that can recognize whether a pet exist
						in a given image!{' '}
						<Link href="https://github.com/xendke/pet-or-not">
							Code
						</Link>{' '}
						&{' '}
						<Link href="https://pet-or-not.herokuapp.com/">
							Demo
						</Link>
					</p>
				</div>
				<div className="indent">
					<h2>More</h2>
					<p>
						Feel free to check out all of{' '}
						<Link href="https://github.com/xendke">
							my projects
						</Link>{' '}
						on Github!
					</p>
				</div>
			</div>
		</div>
	)
}

export default Projects
