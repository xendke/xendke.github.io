import React from 'react'
import './Experience.scss'

const Job = ({ name, positions }) => (
	<div className="Job indent">
		<div className="info">
			<h3 className="companyName">{name}</h3>
			{positions.map(({ name, dateRange, description }) => (
				<React.Fragment key={name}>
					<h4 className="position onlyMobile">
						{name}
						<br />
						<span className="dateRange">[{dateRange}]</span>
					</h4>

					<p className="description onlyMobile">{description}</p>

					{positions.length === 1 && (
						<span className="dateRange atTablet">
							[{dateRange}]
						</span>
					)}
				</React.Fragment>
			))}
		</div>
		<div>
			{positions.map(({ name, description, dateRange }) => (
				<React.Fragment key={name}>
					<h4 className="position atTablet">{name}</h4>

					{positions.length > 1 && (
						<span className="dateRange atTablet">
							[{dateRange}]
						</span>
					)}
					<p className="description atTablet">{description}</p>
				</React.Fragment>
			))}
		</div>
	</div>
)

const Experience = () => {
	return (
		<div className="Section Experience">
			<h1>Experience</h1>
			<Job
				name="Codecademy"
				positions={[
					{
						name: 'Senior Software Engineer',
						dateRange: 'October 2021 - Present',
						description:
							'Implementing new third party services into our platform!',
					},
				]}
			/>
			<Job
				name="FanDuel"
				positions={[
					{
						name: 'Senior Software Engineer',
						dateRange: 'August 2020 - October 2021',
						description:
							'Tech led my team in extending the web platform to support international partners.',
					},
					{
						name: 'Software Engineer',
						dateRange: 'March 2020 - August 2021',
						description:
							'My team and I refactored important user facing pages to React including unit/e2e testing and analytics.',
					},
				]}
			/>
			<Job
				name="Synapse"
				positions={[
					{
						name: 'Software Engineer',
						dateRange: 'September 2018 - March 2020',
						description:
							"At Synapse, I created and maintained Ecommerce React web applications for the company's multiple channels of revenue.",
					},
				]}
			/>
		</div>
	)
}

export default Experience
