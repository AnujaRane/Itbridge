import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import service from "../../assets/service.avif";
import trust2 from "../../assets/trust2.png";
import communication from "../../assets/communication.png";
import laptop from "../../assets/laptop.png";
import requirement from "../../assets/requirement.png";

import "./staffingSolution.css";
const StaffingSolution = () => {
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
        <div className="servicePage1R8">Home / Staffing Solution</div>
        <div className="servicePage1L">
          <div className="servicePage1L18">Staffing Solution</div><br />
          <div className="servicePage1L2"></div>
        </div>
      </div>
      <div className="servicePage3">
        <div className="servicePage3P">
          <div className="servicePage31">
            The community of professional recruiters.
          </div>
          <div className="servicePage33">
          Staffing services are a crucial aspect of human resource management, providing businesses with the ability to acquire the talent they need to succeed. Staffing services encompass a wide range of activities, including recruitment, placement, and management of employees.<br />
          Staffing agencies work closely with businesses to understand their staffing needs and provide customized solutions that meet their specific requirements. They source, screen, and interview candidates, and then place them in temporary or permanent positions within the organization.
In addition to placing employees, staffing services also provide support and guidance to both businesses and employees. This involves providing training and development opportunities, helping employees to adjust to their new roles, and resolving any issues that may arise.


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

export default StaffingSolution;
