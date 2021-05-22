import React, { useRef, useEffect } from 'react'
import ScrollTarget from './ScrollTarget/ScrollTarget'
import AboutMe from './AboutMe/AboutMe'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Education from './Education/Education'
import './DynamicContent.scss'

const DynamicContent = ({ refs, handleSectionChange }) => {
	const dynamicContentRef = useRef(null)

	useEffect(() => {
		if (dynamicContentRef.current) {
			const containerTop =
				dynamicContentRef.current.getBoundingClientRect().y
			let timeout

			const onScroll = () => {
				if (timeout) {
					window.cancelAnimationFrame(timeout)
				}
				timeout = window.requestAnimationFrame(() => {
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
			}
			dynamicContentRef.current.addEventListener('scroll', onScroll)
		}
		return () => {
			dynamicContentRef.current.removeEventListener('scroll', onScroll)
			if (timeout) {
				window.cancelAnimationFrame(timeout)
			}
		}
	}, [dynamicContentRef])

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
