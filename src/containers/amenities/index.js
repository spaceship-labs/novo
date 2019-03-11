import React, { Component } from 'react';
import { Paragraph } from '../../theme/App.styled';
import {
  AmenitiesBg,
  Rows,
  Row,
  RowImg,
  RowImgW,
  RowBg,
  TorreSubTitle,
  TorreSubTitleDivided,
  RowBlue,
  AmenitieList,
  Amenitie,
  List,
  TitleWrapper,
  AmenitiesTitle,
  AmenitiesSubTitle,
  AmenitiesFooter,
  VerticalLine,
  HorizontalLine,
} from './index.styled';

import Smallgallery from '../../components/smallgallery/index';
import img1 from '../../theme/images/Novo-Cancun-PH-Anemona-2026.jpg'; //baño
import img2 from '../../theme/images/Novo-Cancun-PH-Anemona-2078.jpg'; //cocina interior
import img3 from '../../theme/images/Novo-Cancun-PH-Anemona-2103.jpg';
import img4 from '../../theme/images/Novo-Cancun-PH-Anemona-2082.jpg';
import img5 from '../../theme/images/Novo-Cancun-PH-Anemona-2085.jpg';
import img6 from '../../theme/images/Novo-Cancun-PH-Anemona-2088.jpg';

class AmenitiesContainer extends Component {
  constructor(props) {
    super(props);
    const amenities = [
      {
        icon: 'icon-room',
        title: this.props.lang === 'es' ? '4 Habitaciones' : '4 Rooms',
      },
      {
        icon: 'icon-bed',
        title: this.props.lang === 'es' ? '4 Camas' : '4 Beds',
      },
      {
        icon: 'icon-shower',
        title: this.props.lang === 'es' ? '4.5 Baños' : '4.5 Bathrooms',
      },
      {
        icon: 'icon-laundry',
        title: this.props.lang === 'es' ? 'Cuarto de lavado' : 'Laundry',
      },
    ];
    this.amenities = amenities.map((a, index) => {
      const delay = `${index * 0.3}s`;
      return (
        <Amenitie
          key={index}
          align="center"
          className="wow fadeInUp"
          data-wow-delay={delay}
        >
          <i className={a.icon} />
          <p>{a.title}</p>
        </Amenitie>
      );
    });
    this.props = props;
  }
  componentDidMount() {
    this.props.mount('amenities');
  }
  getText = key => {
    const texts = {
      text1: this.props.lang === 'es' ? 'Amenidades' : 'Amenities',
      text2:
        this.props.lang === 'es'
          ? 'Un departamento lujoso,'
          : 'A luxurious apartment,',
      text3:
        this.props.lang === 'es'
          ? 'elegante y sofisticado.'
          : 'elegant and sophisticated.',
      text4:
        this.props.lang === 'es' ? 'Detalles exclusivos' : 'Exclusive details',
      text5:
        this.props.lang === 'es'
          ? 'Acabados en cocina de granito azul brasileño'
          : 'Blue Brazilian granite finishes in kitchen.',
      text6:
        this.props.lang === 'es'
          ? 'Mármol italiano en habitaciones, cocina y baños'
          : 'Italian marble in bedrooms, kitchen and bathrooms.',
      text7:
        this.props.lang === 'es'
          ? 'Gabinetes importados de Italia'
          : 'Imported cabinets from Italy.',
      text8: this.props.lang === 'es' ? '3 hornos grandes' : '3 large ovens.',
      text9: this.props.lang === 'es' ? 'Amenidades' : 'Features',
      text10: this.props.lang === 'es' ? '' : 'and amenities:',
      text11:
        this.props.lang === 'es'
          ? 'Imagina despertar todos los días en este paraíso, en un penthouse extravagante y elegante. Disfrutarás aquí, exclusivas amenidades'
          : 'Imagine waking up everyday in paradise, in this extravagant and opulent penthouse. Enjoy its exclusive and wonderful features!',
      text12: this.props.lang === 'es' ? 'Terraza' : 'Terrace',
      text13: this.props.lang === 'es' ? 'Walk in closet' : 'Walk in closet',
      text14: this.props.lang === 'es' ? 'Jacuzzi' : 'Jacuzzi',
      text15: this.props.lang === 'es' ? 'Roof Garden' : 'Roof Garden',
      text16:
        this.props.lang === 'es'
          ? ''
          : 'Grand wall to wall windows allow the passage of light in every room so you can enjoy the scenic landscape every step you take! Walk across extraordinary 12 to 14 feet ceilings all throughout the penthouse, setting the tone for every space, so you can have your own elevated canvas for décor opportunities! The kitchen has the best Blue Brazilian natural stone granite finishes, and is fully equipped with imported cabinets from Italy and has 3 large ovens. Italian marble can also be found in detailed touches across the rest of the penthouse.',
      text17:
        this.props.lang === 'es'
          ? ''
          : 'A luxurious apartment with 4 bedrooms, each with their own bathroom and terrace. One of the bedrooms is downstairs and the other 3 upstairs where you’ll also find the master bedroom: the most spacious room of them all, featuring his and hers walk-in closet, and its own terrace where you’ll find a jacuzzi and roof garden. The master bedroom is a two-level space area with its own living room and full bathroom with Italian marble finishes. The other two bedrooms, each have their own spa-like full bathroom, and balconies and detailed touches all around. From every room of the house, you can appreciate the best of Cancun’s sunrises and sunsets, skylines and Caribbean waters.',
    };
    return texts[key];
  };
  render() {
    const images = [
      { img: img1, label: '' },
      { img: img2, label: '' },
      { img: img3, label: '' },
      { img: img4, label: '' },
      { img: img5, label: '' },
      { img: img6, label: '' },
    ];
    return (
      <section id="amenities">
        <AmenitiesBg>
          <TitleWrapper className="wow fadeInUp">
            <VerticalLine />
            <AmenitiesTitle>{this.getText('text1')}</AmenitiesTitle>
            <AmenitiesSubTitle>{this.getText('text2')}</AmenitiesSubTitle>
            <AmenitiesFooter>{this.getText('text3')}</AmenitiesFooter>
          </TitleWrapper>
          <Rows align="start">
            <RowImg className="wow fadeInLeft">
              <RowImgW>
                <Smallgallery images={images} />
              </RowImgW>
            </RowImg>
            <RowBg className="wow fadeInRight">
              {/* <TorreSubTitle>{this.getText('text4')}:</TorreSubTitle>
              <HorizontalLine align="left" />
              <List>
                <li>
                  <Paragraph>
                    <span>-</span> {this.getText('text5')}
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <span>-</span> {this.getText('text6')}
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <span>-</span> {this.getText('text7')}
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <span>-</span> {this.getText('text8')}
                  </Paragraph>
                </li>
              </List> */}
              <p>{this.getText('text16')}</p>
              <p>{this.getText('text17')}</p>
            </RowBg>
          </Rows>
        </AmenitiesBg>
        <Rows min="">
          <Row width="20%" className="wow fadeInUp">
            <TorreSubTitleDivided division="true">
              {this.getText('text9')} <br /> {this.getText('text10')}
            </TorreSubTitleDivided>
            <Paragraph>{this.getText('text11')}</Paragraph>
          </Row>
          <RowBlue width="80%" align="center" bg="blue">
            <AmenitieList align="center">{this.amenities}</AmenitieList>
            <Paragraph align="center">
              {this.getText('text12')}
              <i> | </i>
              {this.getText('text13')}
              <i> | </i>
              {this.getText('text14')}
              <i> | </i>
              {this.getText('text15')}
            </Paragraph>
          </RowBlue>
        </Rows>
      </section>
    );
  }
}

export default AmenitiesContainer;
