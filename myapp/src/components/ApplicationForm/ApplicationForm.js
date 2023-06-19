import * as React from "react";
import Form from "./Form";
import "./ApplicationForm.css";
import timelineImg from "../../Media/A_F.png";

export default function ApplicationForm() {
  return (
    <>
      <section className="application-form">
        <h1 className="application-form-title">Application Form</h1>
      </section>
      <section className="timeline-img">
        <img
          id="TL_img"
          src={timelineImg}
          alt="timeline of application journey"
          border="0"
        />
        <div className="step-rows">
          <h5 className="timeline-title-step1">Fill out Application Form</h5>
          <span id="application-parapgraph1">
            Use the application form to register your interest. Our team will
            read your application and see if your lifestyle matches the needs of
            the dog.
          </span>
          <br />
          <h5 className="timeline-title-step2">We'll arrange an appointment</h5>
          <span id="application-parapgraph2">
            If you and the dog seem well suited, we may arrange a virtual home
            check or an appointment for you to come and meet them at the centre.
          </span>
          <br />
          <h5 className="timeline-title-step3">Perfect Match</h5>
          <span id="application-parapgraph3">
            If we mutually decide you're a perfect match, we'll arrange an
            appointment for you to take them to their forever home.
          </span>
          <br />
          <h5 className="timeline-title-step4">Supporting</h5>
          <span id="application-parapgraph4">
            We'll keep in touch to see how you and the dog are doing. If you
            need any advice or support, we're just a phone call away or you can
            browse our dog advice section.
          </span>
        </div>
      </section>
      <section>
        <Form />
      </section>
    </>
  );
}
