import React, { useEffect, useRef } from 'react'
import imageOfJuan from 'assets/self.jpg'
import imageOfJuanWebP from 'assets/self.webp'
import './TopBar.scss'

import loadAnimation from '../../animation/lazyLoad'

const TopBar = () => {
	const canvasRef = useRef()
	const canvasContainerRef = useRef()

	useEffect(() => {
		if (canvasRef.current && canvasContainerRef.current) {
			loadAnimation(canvasRef.current, canvasContainerRef)
		}
	}, [])

	return (
		<div className="TopBarWrapper">
			<div ref={canvasContainerRef} className="CanvasContainer">
				<canvas ref={canvasRef} className="Canvas"></canvas>
				<div className="CanvasOverlay"></div>
			</div>
			<div className="TopBar" id="canvas">
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
					<p className="line location">New York, NY</p>
				</div>
			</div>
		</div>
	)
}

export default TopBar
