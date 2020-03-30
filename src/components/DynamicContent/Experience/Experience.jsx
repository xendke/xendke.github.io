import React from 'react';
import './Experience.scss';

const Job = ({ name, position, dateRange, description}) => (
    <div className="indent">
        <h3 className="companyName">{name}</h3>
        <h4 className="position">
            {position}<span className="dateRange"> - {dateRange}</span>
        </h4>
        <p className="description">{description}</p>
    </div>
)

const Experience = () => {
    return (
        <div className="Section Experience">
            <h1>Experience</h1>
            <Job
                name="FanDuel Group"
                position="Front End Engineer"
                dateRange="March 2020 - Present"
                description="At FanDuel, my team and I are working maintaining and developing international products."
            />
            <Job
                name="Synapse Group Inc"
                position="Front End Engineer"
                dateRange="September 2018 - March 2020"
                description="At Synapse, I created and maintained eCommerce React web applications for the company's multiple channels of revenue. We practice the Agile work environment where we use tools such as Rally and Jira for planning and task management."
            />
            <Job
                name="Web Dev Freelance"
                position="Front End Engineer"
                dateRange="September 2017 - February 2018"
                description="At SUNY Purchase, I upgraded the front end application that the college library uses as their interlibrary loans solution."
            />
            <Job
                name="Coditum"
                position="Teacher"
                dateRange="September 2016 - September 2018"
                description="At Coditum, I taught kids and teenagers fundamentails of programming and even college topics such as data structures and algorithms. I taught in Python and Java!"
            />
        </div>
    );
}

export default Experience;