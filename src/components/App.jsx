import React, { useState, useRef, useEffect } from 'react'
import TopBar from 'components/TopBar/TopBar'
import SideBar from 'components/SideBar/SideBar'
import AnimationControls from 'components/AnimationControls/AnimationControls'
import DynamicContent from 'components/DynamicContent/DynamicContent'
import './App.scss'

const App = () => {
	const [page, setPage] = useState('about')

	const refs = {
		about: useRef(null),
		experience: useRef(null),
		education: useRef(null),
		projects: useRef(null),
	}

	const changeSection = (name, options = { noScroll: false }) => {
		setPage(name)
		if (refs[name].current && !options.noScroll) {
			refs[name].current.scrollIntoView({
				block: 'start',
				inline: 'nearest',
				behavior: 'smooth',
			})
		}
	}

	useEffect(() => {
		document.getElementById('global-loader').classList.add('invisible')
	}, [])

	return (
		<div className="App">
			<TopBar />
			<div className="container">
				<SideBar page={page} handleSectionChange={changeSection} />
				<DynamicContent
					page={page}
					refs={refs}
					handleSectionChange={changeSection}
				/>
			</div>
			<AnimationControls />
		</div>
	)
}

export default App
