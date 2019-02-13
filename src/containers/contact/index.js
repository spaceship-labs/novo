import React, { Component } from "react";
import {
  Section,
  ContactTitle,
  ContactSubTitle,
  ContactTitleFooter,
  Form,
  Column,
  Button
} from "./index.styled";

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.mount("contact");
  }
  render() {
    return (
      <Section id="contact">
        <div className="wow fadeInUp">
          <ContactTitle>Book a viewing</ContactTitle>
          <ContactSubTitle>Droop us a message</ContactSubTitle>
          <ContactTitleFooter>
            and we'll get back to you ASAP
          </ContactTitleFooter>
          <Form>
            <Column>
              <p>
                <label>Full name</label>
                <input type="text" name="name" />
              </p>
              <p>
                <label>Email</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Phone number</label>
                <input type="text" name="phone" />
              </p>
            </Column>
            <Column>
              <p>
                <label>Message</label>
                <textarea rows="5" />
              </p>
              <Button type="submit">Submit</Button>
            </Column>
          </Form>
        </div>
      </Section>
    );
  }
}

export default ContactContainer;
