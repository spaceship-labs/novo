import React, { Component } from "react";
import Largegallery from "../../components/largegallery/index";

import livingrooms1 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3768.jpg";
import livingrooms2 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3779.jpg";
import livingrooms3 from "../../theme/images/Novo-Cancun-PH-Anemona-2052.jpg";
import livingrooms4 from "../../theme/images/Novo-Cancun-PH-Anemona-2136.jpg";
//import livingrooms5 from "../../theme/images/Novo-Cancun-PH-Anemona-2138.jpg";
import livingrooms6 from "../../theme/images/Novo-Cancun-PH-Anemona-2140.jpg";

import bathrooms1 from "../../theme/images/Novo-Cancun-PH-Anemona-2021.jpg";
import bathrooms2 from "../../theme/images/Novo-Cancun-PH-Anemona-2026.jpg";
import bathrooms3 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-2031.jpg";
import bathrooms4 from "../../theme/images/Novo-Cancun-PH-Anemona-2094.jpg";
import bathrooms5 from "../../theme/images/Novo-Cancun-PH-Anemona-2098.jpg";
import bathrooms6 from "../../theme/images/Novo-Cancun-PH-Anemona-2134.jpg";

import kitchen1 from "../../theme/images/Novo-Cancun-PH-Anemona-2078.jpg";
import kitchen2 from "../../theme/images/Novo-Cancun-PH-Anemona-2082.jpg";
import kitchen3 from "../../theme/images/Novo-Cancun-PH-Anemona-2085.jpg";
import kitchen4 from "../../theme/images/Novo-Cancun-PH-Anemona-2088.jpg";

import mroom1 from "../../theme/images/Novo-Cancun-PH-Anemona-2002.jpg";
import mroom2 from "../../theme/images/Novo-Cancun-PH-Anemona-2000.jpg";
import mroom3 from "../../theme/images/Novo-Cancun-PH-Anemona-2006.jpg";
import mroom4 from "../../theme/images/Novo-Cancun-PH-Anemona-2021.jpg";
import mroom5 from "../../theme/images/Novo-Cancun-PH-Anemona-2026.jpg";
import mroom6 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-2031.jpg";
import mroom7 from "../../theme/images/Novo-Cancun-PH-Anemona-2032.jpg";

import groom1 from "../../theme/images/Novo-Cancun-PH-Anemona-1978.jpg";
import groom2 from "../../theme/images/Novo-Cancun-PH-Anemona-1982.jpg";
import groom3 from "../../theme/images/Novo-Cancun-PH-Anemona-2103.jpg";
import groom4 from "../../theme/images/Novo-Cancun-PH-Anemona-2106.jpg";

import terrace1 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3783.jpg";
import terrace2 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3787.jpg";
import terrace3 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-2031.jpg";
import terrace4 from "../../theme/images/Novo-Cancun-PH-Anemona-2021.jpg";
import terrace5 from "../../theme/images/Novo-Cancun-PH-Anemona-2032.jpg";
import terrace6 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3789.jpg";
import terrace7 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3794.jpg";

import other1 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-2882.jpg";
import other2 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-2897.jpg";
import other3 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3749.jpg";
import other4 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-2881.jpg";
import other5 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-2884.jpg";
import other6 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-2903.jpg";
import other7 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-2874.jpg";

class PhotosContainer extends Component {
  componentDidMount() {
    this.props.mount("photos");
  }
  render() {
    const all = {
      section: this.props.lang === "es" ? "Todo" : "All",
      start: 0,
      images: [
        { img: livingrooms1, label: "Main livingroom" },
        { img: livingrooms3, label: "Main dining room" },
        { img: livingrooms6, label: "Second living room" },
        { img: bathrooms1, label: "Master bedroom bathroom" },
        { img: bathrooms2, label: "Master bedroom bathroom" },
        { img: bathrooms3, label: "Master bedroom terrace" },
        { img: bathrooms4, label: "Guest room bathroom" },
        { img: bathrooms5, label: "Guest room bathroom" },
        { img: bathrooms6, label: "Guest room bathroom" },
        { img: kitchen1, label: "" },
        { img: kitchen4, label: "" },
        { img: mroom1, label: "Master bedroom" },
        { img: mroom2, label: "Master bedroom" },
        { img: mroom3, label: "Living room for the master bedroom" },
        { img: mroom7, label: "Master bedroom balcony" },
        { img: groom1, label: "Guest room" },
        { img: groom2, label: "Guest room" },
        { img: groom3, label: "Guest room" },
        { img: terrace1, label: "Main floor terrace" },
        { img: terrace2, label: "Main floor terrace" },
        { img: terrace6, label: "Main floor terrace", vertical: true },
        { img: terrace7, label: "Guest room balcony" },
        { img: other1, label: "Beach pool" },
        { img: other2, label: "Private beach area" },
        { img: other4, label: "Beach pool" },
        { img: other5, label: "Beach pool" },
        { img: other6, label: "", vertical: true },
        { img: other7, label: "Beach pool" }
      ]
    };
    const livingrooms = {
      section: "Living rooms & Main dinner",
      start: all.images.length,
      images: [
        { img: livingrooms1, label: "Main livingroom" },
        { img: livingrooms2, label: "Main livingroom", vertical: true },
        { img: livingrooms3, label: "Main dining room" },
        { img: livingrooms4, label: "Main dining room" },
        { img: livingrooms6, label: "Second living room" }
      ]
    };
    const bathrooms = {
      section: "Bathrooms",
      start: livingrooms.images.start + livingrooms.images.length,
      images: [
        { img: bathrooms1, label: "Master bedroom bathroom" },
        { img: bathrooms2, label: "Master bedroom bathroom" },
        { img: bathrooms3, label: "Master bedroom terrace" },
        { img: bathrooms4, label: "Guest room bathroom" },
        { img: bathrooms5, label: "Guest room bathroom" },
        { img: bathrooms6, label: "Guest room bathroom" }
      ]
    };
    const kitchen = {
      section: "Kitchen",
      start: bathrooms.start + bathrooms.images.length,
      images: [
        { img: kitchen1, label: "" },
        { img: kitchen2, label: "" },
        { img: kitchen3, label: "" },
        { img: kitchen4, label: "" }
      ]
    };
    const mroom = {
      section: "Master Bedroom",
      start: kitchen.start + kitchen.images.length,
      images: [
        { img: mroom1, label: "Master bedroom" },
        { img: mroom2, label: "Master bedroom" },
        { img: mroom3, label: "Living room for the master bedroom" },
        { img: mroom4, label: "Master bedroom bathroom" },
        { img: mroom5, label: "Master bedroom bathroom" },
        { img: mroom6, label: "Master bedroom terrace" },
        { img: mroom7, label: "Master bedroom balcony" }
      ]
    };
    const groom = {
      section: "Guest Bedrooms",
      start: mroom.start + mroom.images.length,
      images: [
        { img: groom1, label: "Guest room" },
        { img: groom2, label: "Guest room" },
        { img: groom3, label: "Guest room" },
        { img: groom4, label: "Guest room" }
      ]
    };
    const terrace = {
      section: "Terraces",
      start: groom.start + groom.images.length,
      images: [
        { img: terrace1, label: "Main floor terrace" }, //
        { img: terrace2, label: "Main floor terrace" }, //
        { img: terrace3, label: "Master bedroom terrace" },
        { img: terrace4, label: "Master bedroom bathroom" },
        { img: terrace5, label: "Master bedroom balcony" },
        { img: terrace6, label: "Main floor terrace", vertical: true }, //
        { img: terrace7, label: "Guest room balcony" } //
      ]
    };
    const other = {
      section: "Other",
      start: terrace.start + terrace.images.length,
      images: [
        { img: other1, label: "Beach pool" },
        { img: other2, label: "Private beach area" },
        {
          img: other3,
          label:
            "View from the main living room, dining room, kitchen and master bedroom"
        },
        { img: other4, label: "Beach pool" },
        { img: other5, label: "Beach pool" },
        { img: other6, label: "", vertical: true },
        { img: other7, label: "Beach pool" }
      ]
    };

    const images = [
      all,
      livingrooms,
      bathrooms,
      kitchen,
      mroom,
      groom,
      terrace,
      other
    ];

    return (
      <Largegallery
        height={this.props.height}
        widthNumber={this.props.widthNumber}
        images={images}
      />
    );
  }
}

export default PhotosContainer;
