import React, { Component } from 'react';
import Card from './Card.jsx';
import { Icon, Grid, Container, Popup } from 'semantic-ui-react';


const linkStyle = {
    textDecoration: "none",
    color: "black"
};

class Link extends Component {
    render () {
        return (
            <Popup
                trigger={
                    <a target="_blank" rel="noopener noreferrer" href={this.props.href} style={linkStyle}>
                    <Icon name={this.props.icon} size='big' circular/>
                    </a>
                }
                content={this.props.title}
                size="small"
                position='bottom center'
                verticalOffset={17}
                horizontalOffset={2}
            />
        )
    }
}

class Links extends Component {
    render() {
        return (
            <Card title="Links" icon="linkify" >
                <Container textAlign='center'>
                <Grid columns={4} padded>
                    <Grid.Column>
                        <Link icon="github" title="GitHub" href="https://www.github.com/xendke"/>
                    </Grid.Column>
                    <Grid.Column>
                        <Link icon="linkedin" title="LinkedIn" href="https://www.linkedin.com/in/juanxgomez"/>
                    </Grid.Column>
                    <Grid.Column>
                        <Link icon="twitter" title="Twitter" href="https://www.twitter.com/xendke"/>
                    </Grid.Column>
                    <Grid.Column>
                        <Link icon="code" title="HackerRank" href="https://www.hackerrank.com/xendke"/>
                    </Grid.Column>
                </Grid>
                </Container>
            </Card>
        )
    }
}

export default Links;