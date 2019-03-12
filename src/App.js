import React, { Component } from 'react';
import './App.css';
import { Divider, Container, Menu, Button } from 'semantic-ui-react';
import { TopSegment, Resume, Projects, Feeds } from './components';


class App extends Component {
  state = { activePage: "resume" , darkMode: false}

  handleItemClick = (e, { name }) => this.setState({ activePage: name })

  handleDarkModeClick = (e) => this.setState({ darkMode: !this.state.darkMode })

  render() {
    const { activePage } = this.state;

    return (
      <div className="App">
        <TopSegment>
          <Button basic onClick={this.handleDarkModeClick}>{this.state.darkMode ? "Lights On" : "Dark Mode" }</Button>
          { this.state.darkMode ? <link rel="stylesheet" type="text/css" href="./semantic.slate.css" /> : null}
        </TopSegment>
        <Divider horizontal>xendke.github.io</Divider>
        <Container>
          <Menu widths={3}>
            <Menu.Item name="resume" active={activePage === "resume"} onClick={this.handleItemClick} />
            <Menu.Item name="projects" active={activePage === "projects"} onClick={this.handleItemClick} />
            <Menu.Item name="feeds" active={activePage === "feeds"} onClick={this.handleItemClick} />
          </Menu>

          { this.state.activePage === "resume" ? <Resume /> : null }
          { this.state.activePage === "projects" ? <Projects /> : null }
          { this.state.activePage === "feeds" ? <Feeds /> : null }

        </Container>
        <Divider/>
        <Container textAlign='center' style={{paddingBottom: 15, color: "grey"}}>
          <a href="https://github.com/xendke/xendke-io" target="_blank" rel="noopener noreferrer" style={{color: "grey"}}> Made with React.js and ❤️</a>
        </Container>
      </div>
    );
  }
}

export default App;
