// import * as React from "react";
// import Form from "./Form";
// import "./ApplicationForm.css";
// import timelineImg from "../../Media/A_F.png";

// export default function ApplicationForm() {
//   return (
//     <>
//       <section className="application-form">
//         <h1 className="application-form-title">Application Form</h1>
//       </section>
//       <div className="stepContainer">
//         <div className="steps">
//           <div className="step">
//             <h4 className="timeline-title">Fill out Application Form </h4>
//           </div>
//           <p id="application-parapgraph1">
//             Use the application form to register your interest. Our team will
//             read your application and see if your lifestyle matches the needs of
//             the dog.
//           </p>
//           <div className="step">
//             <h5 className="timeline-title">We'll arrange an appointment</h5>
//           </div>
//           <p id="application-parapgraph2">
//             If you and the dog seem well suited, we may arrange a virtual home
//             check or an appointment for you to come and meet them at the centre.
//           </p>

//           <h5 className="timeline-title">Perfect Match</h5>
//           <p id="application-parapgraph3">
//             If we mutually decide you're a perfect match, we'll arrange an
//             appointment for you to take them to their forever home.
//           </p>

//           <h5 className="timeline-title">Supporting</h5>
//           <p id="application-parapgraph4">
//             We'll keep in touch to see how you and the dog are doing. If you
//             need any advice or support, we're just a phone call away or you can
//             browse our dog advice section.
//           </p>
//         </div>
//       </div>
//       <section>
//         <Form />
//       </section>
//     </>
//   );
// }

import React from "react";
import Form from "./Form";
import "./ApplicationForm.css";

function ApplicationForm() {
  return (
    <>

      <div className="dummyDiv"></div>
      <h1 className="application-form-title">Application Form</h1>

      <div className="instructionContainer">
        <div className="instructions">
          <div className="stepNumber">
            <h4>1</h4>
          </div>
          <div id="instruction1">
            <h4 className="instructionTitle">Fill out Application Form</h4>
            <p>
              Use the application form to register your interest. Our team will
              read your application and see if your lifestyle matches the needs
              of the dog.
            </p>
          </div>
        </div>

        <div className="instructions">
          <div className="stepNumber">
            <h4>2</h4>
          </div>
          <div id="instruction2">
            <h4 className="instructionTitle">We'll arrange an appointment</h4>
            <p>
              If you and the dog seem well suited, we may arrange a virtual home
              check or an appointment for you to come and meet them at the
              centre.
            </p>
          </div>
        </div>

        <div className="instructions">
          <div className="stepNumber">
            <h4 className="">3</h4>
          </div>
          <div id="instruction3">
            <h4 className="instructionTitle">Perfect Match</h4>
            <p>
              If we mutually decide you're a perfect match, we'll arrange an
              appointment for you to take them to their forever home.
            </p>
          </div>
        </div>

        <div className="instructions">
          <div className="stepNumber">
            <h4>4</h4>
          </div>
          <div id="instruction3">
            <h4 className="instructionTitle">Supporting</h4>
            <p>
              We'll keep in touch to see how you and the dog are doing. If you
              need any advice or support, we're just a phone call away or you
              can browse our dog advice section.
            </p>
          </div>
        </div>
      </div>
      <div className="break">
        <h4 className="application-instruction">Please enter your details</h4>
      </div>
//       <section className="application-form">
//         <h1 className="application-form-title">Application Form</h1>
//       </section>

      
//         <div className="container">
//         <div className="">
//         <div className="">
//           <h2>1</h2>
//         </div>
//           <h5 className="timeline-title-step1">Fill out Application Form</h5>
//           <p id="application-parapgraph1">
//             Use the application form to register your interest. Our team will
//             read your application and see if your lifestyle matches the needs of
//             the dog.
//           </p>
//           </div>
     
//           <h5 className="timeline-title-step2">We'll arrange an appointment</h5>
//           <p id="application-parapgraph2">
//             If you and the dog seem well suited, we may arrange a virtual home
//             check or an appointment for you to come and meet them at the centre.
//           </p>
//           <br />
//           <h5 className="timeline-title-step3">Perfect Match</h5>
//           <p id="application-parapgraph3">
//             If we mutually decide you're a perfect match, we'll arrange an
//             appointment for you to take them to their forever home.
//           </p>
//           <br />
//           <h5 className="timeline-title-step4">Supporting</h5>
//           <p id="application-parapgraph4">
//             We'll keep in touch to see how you and the dog are doing. If you
//             need any advice or support, we're just a phone call away or you can
//             browse our dog advice section.
//           </p>
//         </div>
      <section>
        <Form />
      </section>
    </>
  );
}

export default ApplicationForm;
