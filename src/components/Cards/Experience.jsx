import React, { Component } from 'react';
import Card from './Card.jsx';
import { Item } from 'semantic-ui-react';

class Experience extends Component {
    render() {
        return (
            <Card title="Experience" icon="history">
                <Item.Group divided>
                <Item>
                {/* <Item.Image size='tiny' src='/assets/images/wireframe/image.png' /> */}
                    <Item.Content>
                        <Item.Header as='a' target="_blank" rel="noopener noreferrer" href="https://www.synapsegroupinc.com">
                            Synapse Group Inc.
                        </Item.Header>
                        <Item.Meta>Sept 2018 - Present</Item.Meta>
                        <Item.Description>
                          Created and maintained both small and large e-commerce web applications. Create automation scripts to further improve the team's development process.
                        </Item.Description>
                        <Item.Extra>Front End Developer</Item.Extra>
                    </Item.Content>
                </Item>
                <Item>
                {/* <Item.Image size='tiny' src='/assets/images/wireframe/image.png' /> */}
                    <Item.Content>
                        <Item.Header as='a' target="_blank" rel="noopener noreferrer" href="https://purchase.illiad.oclc.org/illiad/logon.html">
                            Web Dev Freelance
                        </Item.Header>
                        <Item.Meta>Sept 2017 - Feb 2018</Item.Meta>
                        <Item.Description>
                        Updated SUNY Purchase College Library's Interlibrary Loan website using Bootstrap 4 and jQuery. The website is used by students and staff to borrow books/media from other libraries when the item not available at the college's.
                        </Item.Description>
                        <Item.Extra>Front End Developer</Item.Extra>
                    </Item.Content>
                </Item>
                <Item>
                {/* <Item.Image size='tiny' src='/assets/images/wireframe/image.png' /> */}
                    <Item.Content>
                        <Item.Header as='a' target="_blank" rel="noopener noreferrer" href="https://www.coditum.com">
                            Coditum
                        </Item.Header>
                        <Item.Meta>Sept 2016 - Sept 2018</Item.Meta>
                        <Item.Description>
                        Teaching kids of ages 10-18 Python or Java all the way to advanced college topics in computer science. Topics that we teach: Python/Java syntax, basic console games, sorting algorithms, data structures.
                        </Item.Description>
                        <Item.Extra>Teacher</Item.Extra>
                    </Item.Content>
                </Item>
                </Item.Group>
            </Card>
        )
    }
}

export default Experience;
