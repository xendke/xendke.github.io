import React, { useState } from 'react'
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
