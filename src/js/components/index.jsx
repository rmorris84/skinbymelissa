import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Nav from './nav';
import Masthead from './masthead';
import About from './about';
import Services from './services';
import Contact from './contact';
import GoogleMap from './map';
import Footer from './footer';
import { Colors, FontMain, FontSecondary } from '../styles/theme';

// Data
import AboutData from '../data/aboutdata';
import ServiceData from '../data/servicedata';

// Global Styles
injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Comfortaa:400,700|Open+Sans:300,400");
  *{box-sizing: border-box;}
  html {font: normal 16px sans-serif; color: #555;}
  body {margin: 0; font-family: ${FontMain};text-rendering: optimizeLegibility;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}
  p{margin: 0; font-family: ${FontMain};}
  h1,h2,h3,h4,h5,h6{margin: 0; font-family: ${FontSecondary};}
  a {text-decoration: none;opacity: 0.75;}
  a:hover {opacity: 1;transition: opacity 0.3s;}
  section h3 {font-size: 32px;color: ${
  Colors.Accent
};margin-top: 0; margin-bottom: 30px; text-align: center; }
  section h4 {font-size: 24px;color: ${Colors.Main};text-align: center;margin-bottom: 0;}
  section p {line-height: 2; }
  #contact h2, #contact p{margin: 0;}
`;

class Index extends Component {
  constructor() {
    super();
    this.state = { AboutData, ServiceData };
  }
  render() {
    return (
      <div id="page-top">
        <Nav />
        <Masthead />
        <About title={this.state.AboutData.title} about={this.state.AboutData.about} />
        <Services data={this.state.ServiceData} />
        <GoogleMap />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Index;
