import React from "react";
import {  MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const InputLabels=[
  {
    label:"Your name",
    icon:"user",
    type:"text",
    error:"wrong",
    success:"right",
  },
  {

    label:"Your email",
    icon:"envelope",
    type:"email",
    error:"wrong",
    success:"right",
  },
  {
    label:"Subject",
    icon:"tag",
    type:"text",
    error:"wrong",
    success:"right",
  },
  {
    type:"textarea",
    rows:"2",
    label:"Your message",
    icon:"pencil",
  },
]

const MessagingForm = () => {
  return (
        <MDBCol md="6">
          <form>
            <div className="teal-text">
            {InputLabels.map(item=>(
              <MDBInput
                label={item.label}
                icon={item.icon}
                group
                type={item.type}
                validate 
                error={item.error}
                success={item.success}
              />
            ))}
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