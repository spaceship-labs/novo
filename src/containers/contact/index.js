import React, { Component } from "react";
import { Button as ButtonPrimary } from "../../theme/App.styled";
import {
  Section,
  ContactTitle,
  ContactSubTitle,
  ContactTitleFooter,
  Form,
  Column,
  Button,
  Message,
  Modal,
  Background,
  ModalWrapp,
  ModalContainer,
  Close,
  Videos,
  LinkStyle,
  MessageText,
  EmailText
} from "./index.styled";

const videoExt =
  "http://www.novo.com.php72-34.phx1-1.websitetestlink.com/static/media/drone_extended.6779ed4b.mp4";
const videoWebmExt =
  "http://www.novo.com.php72-34.phx1-1.websitetestlink.com/static/media/drone_extended.webmhd.e2ed9a52.webm";
const video =
  "http://www.novo.com.php72-34.phx1-1.websitetestlink.com/static/media/boreal_full_cu.18aeb083.mp4";
const videoWebm =
  "http://www.novo.com.php72-34.phx1-1.websitetestlink.com/static/media/boreal_full.webmhd.c1c6b486.webm";

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { mailSent: null, video: "", videoFlag: true };
  }
  componentDidMount() {
    this.props.mount("contact");
    document.getElementById("videoInt").muted = true;
    document.addEventListener("DOMContentLoaded", this.handleLoad);
    document.getElementById("videoInt").addEventListener("loadstart", () => {
      document.getElementById("videoInt").muted = true;
      document.getElementById("videoInt").play();
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.videoSelected !== this.props.videoSelected) {
      this.changeVideo(this.props.videoSelected);
    }
  }
  handleLoad = () => {
    setTimeout(() => {
      if (navigator.userAgent !== "ReactSnap") {
        this.changeVideo(this.props.videoSelected);
      }
      this.props.openVideo(this.props.videoSelected);
    }, 2500);
  };
  sendMail = event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const url = "/contact/docontact.php";
    fetch(url, {
      method: "POST",
      body: data
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.setState({ mailSent: data });
        setTimeout(() => {
          this.props.close();
        }, 5000);
      });
  };
  getForm = () => {
    const t1 =
      this.props.lang === "es" ? "Agenda una visita" : "Book a viewing";
    const t2 =
      this.props.lang === "es" ? "Déjanos un mensaje" : "Drop us a message";
    const t3 =
      this.props.lang === "es"
        ? "Para más información contacte con Tatiana Martinez"
        : "For any information please contact Tatiana Martinez";
    const t4 = this.props.lang === "es" ? "Nombre Completo" : "Full name";
    const t5 = this.props.lang === "es" ? "Correo" : "Email";
    const t6 = this.props.lang === "es" ? "Número de Teléfono" : "Phone number";
    const t7 = this.props.lang === "es" ? "Mensaje" : "Message";
    const t8 = this.props.lang === "es" ? "Enviar" : "Submit";
    const t9 =
      this.props.lang === "es"
        ? "Tu correo ha sido enviado, gracias."
        : "Your mail has been sent, thank you.";
    const t10 =
      this.props.lang === "es"
        ? "Ocurrió un error, intente de nuevo."
        : "An error occurred, please try again.";
    const t11 =
      this.props.lang === "es"
        ? "info@puertocancunpenthouse.com"
        : "info@puertocancunpenthouse.com";
    const t12 =
      this.props.lang === "es" ? "+52 1 55 62 03 9056" : "+52 1 55 62 03 9056";
    return (
      <React.Fragment>
        <ContactTitle>{t1}</ContactTitle>
        <ContactSubTitle>{t2}</ContactSubTitle>
        <ContactTitleFooter>
          <MessageText>{t3}</MessageText>
          <EmailText>
            <LinkStyle href="mailto:info@puertocancunpenthouse.com">
              {t11}
            </LinkStyle>
          </EmailText>
          <p>
            <LinkStyle href="tel:+52 1 55 62 03 9056">{t12} <i className='icon-whatsapp'></i></LinkStyle>
          </p>
        </ContactTitleFooter>
        <Form onSubmit={this.sendMail}>
          <Column>
            <p>
              <label>{t4}</label>
              <input required type="text" name="boreal_name" />
            </p>
            <p>
              <label>{t5}</label>
              <input required type="email" name="boreal_email" />
            </p>
            <p>
              <label>{t6}</label>
              <input required type="text" name="boreal_phone" />
            </p>
          </Column>
          <Column>
            <p>
              <label>{t7}</label>
              <textarea required rows="5" name="boreal_message" />
            </p>
            <Button type="submit">{t8}</Button>
            <Message type={this.state.mailSent}>
              {this.state.mailSent === true ? t9 : ""}
              {this.state.mailSent === false ? t10 : ""}
            </Message>
          </Column>
        </Form>
      </React.Fragment>
    );
  };
  changeVideo = val => {
    const videoInterior = (
      <React.Fragment>
        <source src={videoWebm} type="video/webm" />
        <source src={video} type="video/mp4" />
      </React.Fragment>
    );
    const videoExterior = (
      <React.Fragment>
        <source src={videoWebmExt} type="video/webm" />
        <source src={videoExt} type="video/mp4" />
      </React.Fragment>
    );
    if (navigator.userAgent !== "ReactSnap") {
      this.setState({
        video: val === true ? videoInterior : videoExterior,
        videoFlag: val
      });
      setTimeout(() => {
        document.getElementById("videoInt").load();
      }, 500);
    }
  };
  render() {
    const form = this.getForm();
    return (
      <React.Fragment>
        <Section id="contact">
          <div className="wow fadeInUp">{form}</div>
        </Section>
        <Modal
          id="portContact"
          className={this.props.contactModal === true ? "open" : ""}
        >
          <Background onClick={this.props.close} />
          <ModalWrapp>
            <ModalContainer>
              <Close onClick={this.props.close}>x</Close>
              {form}
            </ModalContainer>
          </ModalWrapp>
        </Modal>
        <Modal
          id="portVideo"
          className={this.props.videoModal === true ? "open" : ""}
        >
          <Background fullwidth={true} onClick={this.props.closeVideo} />
          <ModalWrapp fullwidth={true}>
            <ModalContainer fullwidth={true}>
              <Close onClick={this.props.closeVideo}>x</Close>
              <Videos>
                <ButtonPrimary
                  className={this.state.videoFlag === true ? "active" : ""}
                  id="interiorButton"
                  onClick={() => {
                    this.changeVideo(true);
                  }}
                >
                  Interior
                </ButtonPrimary>
                <ButtonPrimary
                  className={this.state.videoFlag === false ? "active" : ""}
                  onClick={() => {
                    this.changeVideo(false);
                  }}
                >
                  Exterior
                </ButtonPrimary>
              </Videos>
              <video autoPlay muted controls playsInline loop id="videoInt">
                {this.state.video}
              </video>
            </ModalContainer>
          </ModalWrapp>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ContactContainer;
