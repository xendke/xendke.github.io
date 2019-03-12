import React, { Component } from 'react';
import Card from './Card.jsx';
import { Item } from 'semantic-ui-react';


class Education extends Component {
    render() {
        return (
            <Card title="Education" icon="student">
            <Item.Group divided>
                <Item>
                    <Item.Content>
                        <Item.Header size="small">State University of NY at Purchase</Item.Header>
                        <Item.Meta>September 2014 - May 2018.</Item.Meta>
                        <Item.Description>
                        B.A. Computer Science and Mathematics with Economics Minor
                        </Item.Description>
                        <Item.Extra>Graduated Cum Laude - 3.6/4.0 GPA</Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
            </Card>
        )
    }
}

export default Education;