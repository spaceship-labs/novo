import React, { Component } from 'react';

import { Content } from '../theme/App.styled';
import Sidebar from '../components/sidebar/index';

/* Containers */
import VideoContainer from './video/index';
import HomeContainer from './home/index';
import PhotosContainer from './photos/index';
import AmenitiesContainer from './amenities/index';
import LocationContainer from './location/index';
import AboutContainer from './about/index';
import ContactContainer from './contact/index';
import FooterContainer from './footer/index';

class En extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      isMenuVisible: false,
      widthNumber: 0,
      height: `0px`,
      heightNumber: 0,
      sections: {},
      scroll: 0,
      contactModal: false,
      videoModal: false,
      videoSelected: true,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.updateScrollState();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.updateScrollState, {
      passive: true,
    });
  }

  updateScrollState = event => {
    if (!event) return;
    const sections = {
      home: this.getSection('home'),
      photos: this.getSection('photos'),
      video: this.getSection('video'),
      amenities: this.getSection('amenities'),
      location: this.getSection('location'),
      about: this.getSection('about'),
      contact: this.getSection('contact'),
    };
    console.log(sections);
    this.setState({
      scroll: window.scrollY,
      sections: sections,
      height: `${window.innerHeight}px`,
      heightNumber: window.innerHeight,
      widthNumber: window.innerWidth || document.body.clientWidth,
    });
    this.isMenuVisible();
  };

  isMenuVisible = () => {
    const scroll = this.state.scroll;
    const home = this.state.sections.home;
    if (scroll && home) {
      this.setState({
        isMenuVisible: scroll >= home.top,
      });
    }
  };

  updateWindowDimensions = () => {
    const sections = {
      home: this.getSection('home'),
      photos: this.getSection('photos'),
      video: this.getSection('video'),
      amenities: this.getSection('amenities'),
      location: this.getSection('location'),
      about: this.getSection('about'),
      contact: this.getSection('contact'),
    };
    this.setState({
      sections: sections,
      height: `${window.innerHeight}px`,
      heightNumber: window.innerHeight,
      widthNumber: window.innerWidth || document.body.clientWidth,
    });
  };

  getSection = id => {
    const element = document.getElementById(id);
    if (!element) return false;
    const sections = {
      home: { link: 'home', title: 'Welcome', section: 'home' },
      photos: { link: 'photos', title: 'Galleries', section: 'photos' },
      amenities: {
        link: 'amenities',
        title: 'Amenities',
        section: 'amenities',
      },
      location: { link: 'location', title: 'Location', section: 'location' },
      about: { link: 'about', title: 'About novo Cancún', section: 'about' },
      contact: { link: 'contact', title: 'Contact us', section: 'contact' },
      video: false,
    };
    return {
      element: element,
      section: sections[id],
      top: element.offsetTop,
      height: element.offsetHeight || element.height,
    };
  };

  updateSection = id => {
    let sections = this.state.sections;
    sections[id] = this.getSection(id);
    this.setState({
      sections: sections,
    });
  };

  openContact = () => {
    this.setState({ contactModal: true });
  };
  closeContact = () => {
    this.setState({ contactModal: false });
  };
  openVideo = v => {
    this.setState({ videoModal: true, videoSelected: v });
    // if (play) {
    // const vid = document.getElementById("videoInt");
    // if (vid && vid.paused) vid.play();
    // }
  };
  closeVideo = () => {
    this.setState({ videoModal: false });
    const vid = document.getElementById('videoInt');
    if (vid) vid.pause();
  };

  render() {
    return (
      <React.Fragment>
        <Sidebar
          lang={this.state.lang}
          openVideo={this.openVideo}
          scroll={this.state.scroll}
          sections={this.state.sections}
        />
        <Content>
          <VideoContainer
            height={this.state.heightNumber}
            lang={this.state.lang}
            openVideo={this.openVideo}
            mount={this.updateSection}
            scroll={this.state.scroll}
            sections={this.state.sections}
            isMenuVisible={this.state.isMenuVisible}
          />
          <HomeContainer
            height={this.state.heightNumber}
            lang={this.state.lang}
            openContact={this.openContact}
            mount={this.updateSection}
            sections={this.state.sections}
          />
          <PhotosContainer
            height={this.state.heightNumber}
            lang={this.state.lang}
            widthNumber={this.state.widthNumber}
            mount={this.updateSection}
          />
          <AmenitiesContainer
            lang={this.state.lang}
            mount={this.updateSection}
          />
          <LocationContainer
            lang={this.state.lang}
            mount={this.updateSection}
          />
          <AboutContainer
            lang={this.state.lang}
            openContact={this.openContact}
            mount={this.updateSection}
            sections={this.state.sections}
          />
          <ContactContainer
            lang={this.state.lang}
            close={this.closeContact}
            closeVideo={this.closeVideo}
            videoSelected={this.state.videoSelected}
            openVideo={this.openVideo}
            contactModal={this.state.contactModal}
            videoModal={this.state.videoModal}
            mount={this.updateSection}
          />
          <FooterContainer mount={this.updateSection} />
        </Content>
      </React.Fragment>
    );
  }
}

export default En;
