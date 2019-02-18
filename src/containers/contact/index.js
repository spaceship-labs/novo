import React, { Component } from "react";
import {
  Section,
  ContactTitle,
  ContactSubTitle,
  ContactTitleFooter,
  Form,
  Column,
  Button,
  Message
} from "./index.styled";

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { mailSent: null };
  }
  componentDidMount() {
    this.props.mount("contact");
  }
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
        console.log(data);
        this.setState({ mailSent: data });
      });
  };
  render() {
    return (
      <Section id="contact">
        <div className="wow fadeInUp">
          <ContactTitle>Book a viewing</ContactTitle>
          <ContactSubTitle>Drop us a message</ContactSubTitle>
          <ContactTitleFooter>
            and we'll get back to you ASAP
          </ContactTitleFooter>
          <Form onSubmit={this.sendMail}>
            <Column>
              <p>
                <label>Full name</label>
                <input required type="text" name="boreal_name" />
              </p>
              <p>
                <label>Email</label>
                <input required type="email" name="boreal_email" />
              </p>
              <p>
                <label>Phone number</label>
                <input required type="text" name="boreal_phone" />
              </p>
            </Column>
            <Column>
              <p>
                <label>Message</label>
                <textarea required rows="5" name="boreal_message" />
              </p>
              <Button type="submit">Submit</Button>
              <Message type={this.state.mailSent}>
                {this.state.mailSent === true
                  ? "Your mails has been sent, than you."
                  : ""}
                {this.state.mailSent === false
                  ? "An error occurred, please try again."
                  : ""}
              </Message>
            </Column>
          </Form>
        </div>
      </Section>
    );
  }
}

export default ContactContainer;
