import React from 'react'
import imageOfJuan from 'assets/self.png'
import imageOfJuanWebP from 'assets/self.webp'
import './TopBar.scss'

const TopBar = () => {
	return (
		<div className="TopBar">
			<div>
				<picture>
					<source srcSet={imageOfJuanWebP} type="image/webp" />
					<source srcSet={imageOfJuan} type="image/png" />
					<img
						className="avatar"
						src={imageOfJuan}
						alt="Picture of Juan smiling to the camera."
					/>
				</picture>
			</div>
			<div>
				<p className="line name">Juan X. Gomez</p>
				<p className="line title">Software Engineer</p>
				<p className="line email">xendke@gmail.com</p>
			</div>
		</div>
	)
}

export default TopBar
