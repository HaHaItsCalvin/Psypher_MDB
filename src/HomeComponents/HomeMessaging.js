import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const MessagingForm = () => {
  return (
        <MDBCol md="6">
          <form>
            <div className="teal-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="teal">
                Send <MDBIcon icon="paper-plane-o" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
  );
};

export default MessagingForm;