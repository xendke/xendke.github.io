import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';


class Card extends Component {
    render() {
        return (
            <React.Fragment>
                <Header as='h2' icon={this.props.icon} content={this.props.title} attached='top'/>
                <Segment attached>
                    {this.props.children}
                </Segment>
            </React.Fragment>
        )
    }
}

export default Card;