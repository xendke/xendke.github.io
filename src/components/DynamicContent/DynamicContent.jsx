import React, { useRef, useState, useEffect, useCallback } from 'react'
import ScrollTarget from './ScrollTarget/ScrollTarget'
import AboutMe from './AboutMe/AboutMe'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Education from './Education/Education'
import { debounce } from '../../animation/helpers'
import './DynamicContent.scss'

const DynamicContent = ({ refs, handleSectionChange }) => {
	const [animationTimeout, setAnimationTimeout] = useState(null)
	const dynamicContentRef = useRef(null)
	const scrollHandler = useCallback(
		debounce(() => {
			if (dynamicContentRef.current) {
				const containerTop =
					dynamicContentRef.current.getBoundingClientRect().y

				if (animationTimeout) {
					window.cancelAnimationFrame(animationTimeout)
				}
				setAnimationTimeout(
					window.requestAnimationFrame(() => {
						for (let section in refs) {
							const currentSectionTop =
								refs[section].current.getBoundingClientRect().y
							if (
								Math.abs(
									Math.floor(currentSectionTop) -
										Math.floor(containerTop)
								) < 100
							) {
								handleSectionChange(section, { noScroll: true })
								break
							}
						}
					})
				)
			}
		}, 200),
		[dynamicContentRef]
	)

	useEffect(() => {
		if (dynamicContentRef.current) {
			dynamicContentRef.current.addEventListener('scroll', scrollHandler)
		}
		return () => {
			dynamicContentRef.current.removeEventListener(
				'scroll',
				scrollHandler
			)
			if (animationTimeout) {
				window.cancelAnimationFrame(animationTimeout)
			}
		}
	}, [dynamicContentRef, animationTimeout])

	return (
		<div className="DynamicContent" ref={dynamicContentRef}>
			<ScrollTarget ref={refs.about}>
				<AboutMe />
			</ScrollTarget>
			<ScrollTarget ref={refs.experience}>
				<Experience />
			</ScrollTarget>
			<ScrollTarget ref={refs.education}>
				<Education />
			</ScrollTarget>
			<ScrollTarget ref={refs.projects} last={true}>
				<Projects />
			</ScrollTarget>
		</div>
	)
}

export default DynamicContent
