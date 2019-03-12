import React, { Component } from 'react';
import Card from './Card.jsx';
import { Icon } from 'semantic-ui-react';

class AboutMe extends Component {
    render() {
        return (
            <Card title="About Me" icon="user">
                <p>
                    I am a New York based software developer. I use code to bring ideas to life. I enjoy teaching what I know about code, as well as learning that which I don't.
                </p>
                <p>
                    I have knowledge of many tools, and concepts. I have worked on desktop, mobile, and web applications. I am currently focusing on full stack web development.
                </p>
                <Icon link name="file text outline"/>
                <a href= "https://drive.google.com/uc?export=download&id=0B4-jhWx3RgYreS1hTkoxNkRTZG8">Resume</a>
            </Card>
        )
    }
}

export default AboutMe;
