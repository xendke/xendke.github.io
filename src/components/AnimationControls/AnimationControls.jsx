import React, { useEffect, useState } from 'react'
import { WEBGL } from '../../animation'
import './AnimationControls.scss'

const ANIMATION_STATE = 'animationDisabled'

const AnimationControls = () => {
	const [isAnimationPaused, setIsAnimationPaused] = useState(
		localStorage.getItem(ANIMATION_STATE)
	)
	const toggleAnimation = () => {
		if (isAnimationPaused) {
			setIsAnimationPaused(false)
			return localStorage.removeItem(ANIMATION_STATE)
		}
		setIsAnimationPaused(true)
		return localStorage.setItem(ANIMATION_STATE, true)
	}

	useEffect(() => {
		try {
			const canvasEl = document.getElementById('canvas')

			if (isAnimationPaused) {
				canvasEl.classList.add('blurred')
			} else {
				canvasEl.classList.remove('blurred')
			}
		} catch (e) {
			console.error(e)
		}
		return () => {}
	}, [isAnimationPaused])

	if (!WEBGL.isWebGLAvailable()) {
		return null
	}

	return (
		<div className="AnimationControls">
			<div className="tab">
				Animation:
				<label className="toggle-control">
					<input
						type="checkbox"
						checked={!isAnimationPaused}
						onChange={toggleAnimation}
						onKeyPress={({ key }) =>
							key === 'Enter' ? toggleAnimation() : null
						}
					/>
					<span className="control"></span>
				</label>
			</div>
		</div>
	)
}

export default AnimationControls
