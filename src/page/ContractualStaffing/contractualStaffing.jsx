import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import service from "../../assets/service.avif";
import trust2 from "../../assets/trust2.png";
import communication from "../../assets/communication.png";
import laptop from "../../assets/laptop.png";
import requirement from "../../assets/requirement.png";

import "./contractualStaffing.css";
const ContractualStaffing= () => {
  const form = useRef();
  const [validEmail, setValidEmail] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.reportValidity() && validEmail) {
      emailjs
        .sendForm("service_g1s3iif", "template_pcdua1o", form.current, {
          publicKey: "Ja5h25qtYJFq4x2S9",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Invalid email or form data.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = form.current.elements["user_email"].value;
    setValidEmail(validateEmail(email));
    sendEmail(e);
  };

  // Email validation function
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      <Header />
      <div className="servicePage1">
        <div className="servicePage1R11">Home / Contractual Staffing</div>
        <div className="servicePage1L">
          <div className="servicePage1L111">Contractual Staffing</div><br />
          <div className="servicePage1L2"></div>
        </div>
      </div>
      <div className="servicePage3">
        <div className="servicePage3P">
          <div className="servicePage31">
            The community of professional recruiters.
          </div>
          <div className="servicePage33">
          Workplace dynamics and requirements have changed drastically compared to the job market a few years back. Businesses often need skilled workforce to deal with the ebbs and flows of the industry’s demands. In many such cases, temporary staffing has proven a better solution.

          Organisations consider temporary staffing when they have projects which require additional help without long-term commitments. This helps in making the company agile to the needs of the market while making the company lean and the workforce compliance management easy. Furthermore, the addition of short-term employees is known to enhance workplace morale and often leads to meaningful hires.
          
                    </div>
          <div className="servicePage34">
            <div class="containerrBtn1">
              <a className="anchorBtn1" href="#">
                <span className="spanBtn">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="servicePage3i">
          <img src={service} alt="" width={"auto"} height={"auto"} />
        </div>
      </div>
      <div className="servicePage4">
        <div className="servicePage41">Virtual Assistant Services</div>
        <div className="servicePage42">Recruitment & HR Sector</div>
        <div className="servicePage43">
          Our aim is to provide a personalised Virtual Assistant service, and to
          get to know your requirements as quickly as possible. Listed below is
          some of what you can expect from your Virtual Assistants:
        </div>
        <div className="servicePage44">
          <div className="servicePage441">
            <div className="servicePage4411">
              <img src={trust2} alt="" />
            </div>
            <div className="servicePage4412">Reliable</div>
            <div className="servicePage4443">
              Reliable, trustworthy and 100% discreet
            </div>
          </div>
          <div className="servicePage441">
            <div className="servicePage4411">
              <img src={communication} alt="" />
            </div>
            <div className="servicePage4412">Professional</div>
            <div className="servicePage4443">
              Professional in all written and verbal communication
            </div>
          </div>
          <div className="servicePage441">
            <div className="servicePage4411">
              <img src={laptop} alt="" />
            </div>
            <div className="servicePage4412">Prompt And Reliable</div>
            <div className="servicePage4443">
              Prompt and reliable carrying out the work
            </div>
          </div>
          <div className="servicePage441">
            <div className="servicePage4411">
              <img src={requirement} alt="" />
            </div>
            <div className="servicePage4412">Adapt</div>
            <div className="servicePage4443">
              Able to adapt to different work requirements
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
};

export default ContractualStaffing;
