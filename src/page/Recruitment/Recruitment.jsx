import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import service from "../../assets/service.avif";
import trust2 from "../../assets/trust2.png";
import communication from "../../assets/communication.png";
import laptop from "../../assets/laptop.png";
import requirement from "../../assets/requirement.png";

import "./Recruitment.css";
const Recruitment = () => {
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
        <div className="servicePage1R2">Home / Recruitment & Staffing</div>
        <div className="servicePage1L">
          <div className="servicePage1L3">RECRUITMENT &</div>
          <div className="servicePage1L2">STAFFING</div>
        </div>
      </div>
      <div className="servicePage3">
        <div className="servicePage3P">
          <div className="servicePage31">
            The community of professional recruiters.
          </div>
          <div className="servicePage33">
            At Bridge Connect Solutions, we eat, breathe, and live recruitment.
            With good industry experience, we have successfully carved a niche
            which has made us unique. Our unique approach towards traditional
            recruitment processes is what sets us apart.
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
      <div className="servicePage5">
        <div className="servicePage54">
          <div className="servicePage54H1">Contact us.</div>
          <div className="servicePage54H2">Your two cents.</div>
          <div className="servicePage541">
            <form className="formContact" ref={form} onSubmit={sendEmail}>
              <div className="sec1">
                <input
                  className="formInput1"
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
                <input
                  className="formInput1"
                  type="email"
                  name="user_email"
                  placeholder="Email address"
                  required
                />
              </div>
              <textarea
                className="formMessage"
                name="message"
                placeholder="Message"
                required
              />
            </form>
          </div>
          <div className="servicePage541p">
            We are a creativity hatchery, so go ahead and lay us a message with
            your quirky idea or suggestion. We promise we won't judge for any
            typos or auto-correct fails. Please note that we have specific forms
            for project proposals and job applications, so refer to those if
            that's your case.
          </div>

          <div className="servicePage542">
            <div className="servicePage5421">
              <div className="servicePage54211">Hate contact forms?</div>
              <div className="servicePage54212">info@bridgeconnect.co</div>
            </div>
            <div className="servicePage5422"></div>
            <button
              className="formContact"
              type="submit"
              onClick={handleSubmit}
            >
              Send Message{" "}
            </button>{" "}
            {/* Outside form */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recruitment;
