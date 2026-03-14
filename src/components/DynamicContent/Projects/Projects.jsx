import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import mousy from 'assets/mousy.png'
import catchup from 'assets/catchup.png'
import './Projects.scss'

const Link = ({ href, children }) => (
	<a href={href} target="_blank" rel="noopener noreferrer">
		{children}
	</a>
)

const Projects = () => {
	const [imageToPreview, setImageToPreview] = useState(null)
	return (
		<div className="Section Projects">
			<Modal
				isOpen={imageToPreview}
				onClose={() => setImageToPreview(null)}
			>
				<img src={imageToPreview} alt="Screenshot of the project" />
			</Modal>
			<h1>Projects</h1>
			<div className="project-list">
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
					<button
						type="button"
						className="screenshot-btn"
						onClick={() => setImageToPreview(mousy)}
					>
						View screenshot
					</button>
				</div>
				<div className="indent">
					<h2>Catchup</h2>
					<p>
						An anonymous chat web app! React, SCSS, Firebase.{' '}
						<Link href="https://catchup-chat.web.app">Demo</Link>{' '}
						&{' '}
						<Link href="https://github.com/xendke/catchup">
							Code
						</Link>.
					</p>
					<button
						type="button"
						className="screenshot-btn"
						onClick={() => setImageToPreview(catchup)}
					>
						View screenshot
					</button>
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
