import React, { Component } from 'react';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import "./Feeds.css";

class Feeds extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        // set up twitter and github feed widgets
        const twitter = document.createElement('script');
        twitter.setAttribute(
            'src', 
            'https://platform.twitter.com/widgets.js'
        );
        twitter.setAttribute('async', "true");
        document.body.appendChild(twitter);

        window.GitHubActivity.feed({
            username: "xendke",
            selector: "#github-widget-container",
            limit: 20 
        });
        setTimeout(() => { // can't find a hook for twitter widget load
            this.setState({ loading: false });
        }, 1500);
    }

    render() {
        const { loading }  = this.state;
        return (
            <Grid columns={2} padded stackable>
            <Grid.Row>
                <Dimmer active={loading} inverted>
                    <Loader inverted>Loading Feeds</Loader>
                </Dimmer>
                <Grid.Column >
                    <div id="github-widget-container">
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <a className="twitter-timeline" href="https://twitter.com/xendke?ref_src=twsrc%5Etfw" data-height="410">Tweets by xendke</a> 
                </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Feeds;
