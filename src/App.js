import React, { Component } from 'react';
import { Theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { Wrapper, Content } from "./theme/App.styled";
import Sidebar from "./components/sidebar/index";

/* Containers */
import VideoContainer from "./containers/video/index";
import HomeContainer from "./containers/home/index";
import PhotosContainer from "./containers/photos/index";
import AmenitiesContainer from "./containers/amenities/index";
import LocationContainer from "./containers/location/index";
import AboutContainer from "./containers/about/index";
import ContactContainer from "./containers/contact/index";
import FooterContainer from "./containers/footer/index";

class App extends Component {

  constructor( props ){
    super( props );
    const theme = {...Theme, height: `${window.innerHeight}px` };
    this.state = { 
      theme: theme, 
      isMenuVisible: false,
      sections : {},
      scroll: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.updateScrollState();
    //window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.updateScrollState, {passive: true});
  }

  updateScrollState = ( event ) => {
    if( !event ) return;
    const sections = {
      video: this.getSection('video'),
      home: this.getSection('home'),
      photos: this.getSection('photos'),
      amenities: this.getSection('amenities'),
      location: this.getSection('location'),
      about: this.getSection('about'),
      contact: this.getSection('contact'),
    };
    this.setState({
      scroll: window.scrollY,
      sections : sections
    })
    this.isMenuVisible( );
    //console.log('scroll', window.scrollY);
  }

  isMenuVisible = ( ) => {
    const scroll = this.state.scroll;
    const home = this.state.sections.home;
    if( scroll && home ){
      this.setState({
        isMenuVisible: (scroll >= home.top) 
      })
    }
  }

  updateWindowDimensions = () => {
    const theme = {...Theme, height: `${window.innerHeight}px` };
    const sections = {
      video: this.getSection('video'),
      home: this.getSection('home'),
      photos: this.getSection('photos'),
      amenities: this.getSection('amenities'),
      location: this.getSection('location'),
      about: this.getSection('about'),
      contact: this.getSection('contact'),
    };
    this.setState({
      theme: theme,
      sections : sections
    });
  }

  getSection = ( id ) => {
    const element = document.getElementById( id );
    return {
      element: element,
      top: element.offsetTop,
      height: element.offsetHeight || element.height,
    }
  }

  updateSection = ( id ) => {
    let sections = this.state.sections;
    sections[ id ] = this.getSection(id);
    this.setState({
      sections:  sections 
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme} >
        <Wrapper id="wrapper">
          <Sidebar
            scroll={this.state.scroll}
            sections={this.state.sections} 
          />
          <Content>
            <VideoContainer 
              mount={this.updateSection} 
              scroll={this.state.scroll}
              sections={this.state.sections}
              isMenuVisible={this.state.isMenuVisible} 
            />
            <HomeContainer mount={this.updateSection} />
            <PhotosContainer mount={this.updateSection} />
            <AmenitiesContainer mount={this.updateSection} />
            <LocationContainer mount={this.updateSection} />
            <AboutContainer mount={this.updateSection} />
            <ContactContainer mount={this.updateSection} />
            <FooterContainer mount={this.updateSection} />
          </Content>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
