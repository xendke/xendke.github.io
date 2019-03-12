import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { AboutMe, Education, Links, Experience, Recognitions } from './Cards';

class Resume extends Component {

  render() {
    return (
        <Grid columns={2} stackable padded>
        <Grid.Row>
            <Grid.Column>
                <AboutMe/>
                <Experience/>
            </Grid.Column>

            <Grid.Column>
                <Education/>
                <Links/>
                <Recognitions/>
            </Grid.Column>
        </Grid.Row >
        </Grid>
    );
  }
}

export default Resume;
