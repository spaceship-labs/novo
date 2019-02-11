import React, { Component } from 'react';
import {
  SidebarWrapper,
  SidebarSection,
  SideMenu
} from "./index.styled";

class Sidebar extends Component {
  render() {
    const Sections = {
      video: 'Welcome',
      home: 'Welcome',
      photos: 'Photos',
      amenities: 'Amenities',
      location: 'Location',
      about: 'About Novo',
      contact: 'Contact us'
    };
    const getText = ( id ) => {
      return Sections[ id ] || 'Welcome';
    }
    const section = Object.keys( this.props.sections )
      .reduce( ( result, key ) => {
        const item = this.props.sections[ key ];
        if( this.props.scroll > item.top && this.props.scroll < this.props.scroll + item.height )
          result = getText(key);
        return result;
      },'Welcome');
    return (
      <SidebarWrapper>
        <SideMenu>
          <i className='icon-menu'></i>
        </SideMenu>
        <SidebarSection>
          <p>{section}</p>
          <i className='icon-arrow'></i>
        </SidebarSection>
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
