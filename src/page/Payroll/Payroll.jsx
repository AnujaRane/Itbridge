import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import service from "../../assets/service.avif";
import trust2 from "../../assets/trust2.png";
import communication from "../../assets/communication.png";
import laptop from "../../assets/laptop.png";
import requirement from "../../assets/requirement.png";

import "./Payroll.css";
const Payroll = () => {
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
        <div className="servicePage1R" style={{marginLeft: '5%'}}>Home / Attendance Payroll Management</div>
        <div className="servicePage1L">
          <div className="servicePage1L1"style={{marginLeft: '-10%'}}>Attendance Payroll &</div>
          <div className="servicePage1L2">Management</div>
        </div>
      </div>
      <div className="servicePage3">
        <div className="servicePage3P">
          <div className="servicePage31">
            The community of professional recruiters.
          </div>
          <h2>We give the best Services
          </h2>
          <div className="servicePage33">
          The attendance and payroll management system is a key process in the HR department. Tracking attendance of employees is crucial for the reliability and profitability of the company. To track employee work hours, companies use various methods ranging from traditional punch cards systems, timesheets to a Biometric system. The main aim of this process is to keep track of employees’ work hours by daily recording their clock-in & clock-out time. Employees usually have to fill the timesheets after work hours or before leaving the office for that particular day. Manual filling of timesheets can lead to various issues like timesheet tampering, inaccuracy, and errors, etc. An automated attendance management system can make things easy and prevent such issues.
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
      <section>
   <div className='section'>
   <p>Payroll management is a crucial part of HR department. It is very critical to process correct payroll along with managing employees’ taxes, PF and other benefits properly and in time. Though there is no harm in managing payroll manually but old processes are rustic and often result in inaccurate, delay payroll process as well as tax calculations which leads to unhappy employee, wastage of resources also to manage HRMS manually require lot of staff which raises input cost. New age HRMS help manage HR process with ease as well as save cost and time.
   </p>
   </div>
   </section>
  
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

export default Payroll;
