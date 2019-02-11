import React, { Component } from 'react';
import {
    GalleryWrapp,
    GalleryReel,
    GalleryItem,
} from "./index.styled";
import { Theme } from "../../theme/theme";

class Largegallery extends Component {
    constructor( props ){
        super( props );
    }
    
    render() {
        const sidebar = window.innerWidth >= 1400? Theme.SidebarWidth2x : Theme.SidebarWidth;
        const reel = ( window.innerWidth - sidebar ) * this.props.images.length;
        const itemWidth = window.innerWidth - sidebar;
        const images = this.props.images.map((img,index) => {
            return <GalleryItem key={index} width={itemWidth} >
                <img src={img} />
            </GalleryItem>
        })
        return (
            <GalleryWrapp>
                <GalleryReel width={reel} >{images}</GalleryReel>
            </GalleryWrapp>
        );
    }
}

export default Largegallery;