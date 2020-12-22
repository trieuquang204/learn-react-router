import React from "react";
import { Prompt } from "react-router-dom";

function Contact() {
  return (
    <div className="container">
      Day la Contact page
      <button type="button" className="btn btn-info d-block">
        Cho phep
      </button>
      <button type="button" className="btn btn-danger d-block">
        Khong cho phep
      </button>
      <Prompt
        when={true}
        message={(location) => `ban chac chan muon toi ${location.pathname}`}
      />
    </div>
  );
}

export default Contact;
