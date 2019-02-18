import React, { Component } from "react";
import Largegallery from "../../components/largegallery/index";
import { SectionWrapper } from "./index.styled";

import livingrooms1 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3768.jpg";
import livingrooms2 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3779.jpg";
import livingrooms3 from "../../theme/images/Novo-Cancun-PH-Anemona-2052.jpg";
import livingrooms4 from "../../theme/images/Novo-Cancun-PH-Anemona-2136.jpg";
import livingrooms5 from "../../theme/images/Novo-Cancun-PH-Anemona-2138.jpg";
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
    const livingrooms = {
      section: "Living rooms & Main dinner",
      start: 0,
      images: [
        { img: livingrooms1, label: "" },
        { img: livingrooms2, label: "", vertical: true },
        { img: livingrooms3, label: "" },
        { img: livingrooms4, label: "" },
        { img: livingrooms5, label: "" },
        { img: livingrooms6, label: "" }
      ]
    };
    const bathrooms = {
      section: "Bathrooms",
      start: livingrooms.images.length,
      images: [
        { img: bathrooms1, label: "" },
        { img: bathrooms2, label: "" },
        { img: bathrooms3, label: "" },
        { img: bathrooms4, label: "" },
        { img: bathrooms5, label: "" },
        { img: bathrooms6, label: "" }
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
        { img: mroom1, label: "" },
        { img: mroom2, label: "" },
        { img: mroom3, label: "" },
        { img: mroom4, label: "" },
        { img: mroom5, label: "" },
        { img: mroom6, label: "" },
        { img: mroom7, label: "" }
      ]
    };
    const terrace = {
      section: "Terraces",
      start: mroom.start + mroom.images.length,
      images: [
        { img: terrace1, label: "" },
        { img: terrace2, label: "" },
        { img: terrace3, label: "" },
        { img: terrace4, label: "" },
        { img: terrace5, label: "" },
        { img: terrace6, label: "", vertical: true },
        { img: terrace7, label: "" }
      ]
    };
    const other = {
      section: "Other",
      start: terrace.start + terrace.images.length,
      images: [
        { img: other1, label: "" },
        { img: other2, label: "" },
        { img: other3, label: "" },
        { img: other4, label: "" },
        { img: other5, label: "" },
        { img: other6, label: "", vertical: true },
        { img: other7, label: "" }
      ]
    };

    const images = [livingrooms, bathrooms, kitchen, mroom, terrace, other];

    return (
      <SectionWrapper id="photos">
        <Largegallery widthNumber={this.props.widthNumber} images={images} />
      </SectionWrapper>
    );
  }
}

export default PhotosContainer;
