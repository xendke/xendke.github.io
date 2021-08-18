import React from 'react'
import './Experience.scss'

const Job = ({ name, position, dateRange, description }) => (
	<div className="Job indent">
		<div className="info">
			<h3 className="companyName">{name}</h3>
			<h4 className="position onlyMobile">
				{position}
				<br />
				<span className="dateRange">[{dateRange}]</span>
			</h4>
			<span className="dateRange atTablet">[{dateRange}]</span>
		</div>
		<div>
			<h4 className="position atTablet">{position}</h4>
			<p className="description">{description}</p>
		</div>
	</div>
)

const Experience = () => {
	return (
		<div className="Section Experience">
			<h1>Experience</h1>
			<Job
				name="FanDuel Group"
				position="Senior Software Engineer"
				dateRange="March 2020 - Present"
				description="At FanDuel, my team and I are working on developing and maintaining international products."
			/>
			<Job
				name="Synapse Group Inc"
				position="Software Engineer"
				dateRange="September 2018 - March 2020"
				description="At Synapse, I created and maintained Ecommerce React web applications for the company's multiple channels of revenue."
			/>
			<Job
				name="Freelance"
				position="Software Engineer"
				dateRange="September 2017 - February 2018"
				description="At SUNY Purchase, I upgraded the front end application that the college library uses as their interlibrary loans solution."
			/>
		</div>
	)
}

export default Experience
