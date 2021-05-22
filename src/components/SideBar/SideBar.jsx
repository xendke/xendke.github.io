import React from 'react'
import './SideBar.scss'

const ListItem = ({ page, name, label, handleSectionChange }) => (
	<li
		className={page === name ? 'selected' : null}
		onClick={(event) => {
			event.target.blur()
			handleSectionChange(name)
		}}
		tabIndex={0}
		onKeyDown={(event) => {
			if (event.keyCode === 13) handleSectionChange(name)
		}}
	>
		{label}
	</li>
)

const SideBar = ({ page, handleSectionChange }) => {
	const links = [
		{ name: 'about', label: 'About Me' },
		{ name: 'experience', label: 'Experience' },
		{ name: 'education', label: 'Education' },
		{ name: 'projects', label: 'Projects' },
	]
	return (
		<div className="SideBar">
			<ul>
				{links.map((link) => (
					<ListItem
						page={page}
						handleSectionChange={handleSectionChange}
						name={link.name}
						label={link.label}
						key={link.name}
					/>
				))}
			</ul>
		</div>
	)
}

export default SideBar
