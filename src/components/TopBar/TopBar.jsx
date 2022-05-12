import React, { useEffect, useRef } from 'react'
import imageOfJuan from 'assets/self.png'
import imageOfJuanWebP from 'assets/self.webp'
import './TopBar.scss'

import loadAnimation from '../../animation/lazyLoad'

const TopBar = () => {
	const canvasRef = useRef()

	useEffect(() => {
		if (canvasRef.current) loadAnimation(canvasRef.current)
	}, [])

	return (
		<>
			<canvas
				ref={canvasRef}
				style={{
					height: '200px',
					position: 'absolute',
					zIndex: -1,
					// filter: 'blur(1px)',
				}}
			></canvas>
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
					<p className="line title">Sr. Software Engineer</p>
					<p className="line email">xendke@gmail.com</p>
				</div>
			</div>
		</>
	)
}

export default TopBar
