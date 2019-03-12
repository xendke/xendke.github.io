import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';


class Projects extends Component {
    render() {
        return (
        <Card.Group style={{padding: 15}} itemsPerRow={3} doubling stackable centered>
            <Card target="_blank" rel="noopener noreferrer" href='https://github.com/xendke/digitaizer' fluid>
                <Card.Content>
                    <Card.Header>digitaizer</Card.Header>
                    <Card.Description>Desktop application that predicts a user-drawn numerical digit using a bare bone neural network.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='code' />
                    Python, Numpy, TkInter
                </Card.Content>
            </Card>
            <Card target="_blank" rel="noopener noreferrer" href='https://www.xendke.io/mtask/' fluid>
                <Card.Content>
                    <Card.Header>mTask</Card.Header>
                    <Card.Description>Todo web application.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='code' />
                    React.js, Firebase, MaterialUI
                </Card.Content>
            </Card>
            <Card target="_blank" rel="noopener noreferrer" href='https://www.xendke.io/catchup/' fluid>
                <Card.Content>
                    <Card.Header>catchup</Card.Header>
                    {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                    <Card.Description>Anonymous chat room.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='code' />
                    React.js, Firebase, SemanticUI
                </Card.Content>
            </Card>

            <Card target="_blank" rel="noopener noreferrer" href='http://students.purchase.edu/juan.gomez/Databases/bookmarker/index.php' fluid>
                <Card.Content>
                    <Card.Header>bookmarker</Card.Header>
                    <Card.Description>A place to share websites.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='code' />
                    PHP, MySQL, MaterialUI
                </Card.Content>
            </Card>
            <Card target="_blank" rel="noopener noreferrer" href='https://github.com/xendke/authentic' fluid>
                <Card.Content>
                    <Card.Header>authentic</Card.Header>
                    <Card.Description>TOTP or 2FA client for elementaryOS</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='code' />
                    Vala, Gtk3, Granite
                </Card.Content>
            </Card>

            <Card target="_blank" rel="noopener noreferrer" href='https://github.com/xendke/xendke-io' fluid>
                <Card.Content>
                    <Card.Header>xendke.io</Card.Header>
                    <Card.Description>This very own website.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='code' />
                    React.js, SemanticUI, Nginx
                </Card.Content>
            </Card>
            <Card target="_blank" rel="noopener noreferrer" href='https://www.xendke.io/pet-or-not/' fluid>
                <Card.Content>
                    <Card.Header>pet or not</Card.Header>
                    <Card.Description>Image recognition web application for detecting your beloved pets.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='code' />
                    React.js, Bootstrap4, Clarifai
                </Card.Content>
            </Card>
        </Card.Group>
        );
    }
}

export default Projects;
