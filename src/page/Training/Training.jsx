import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import service from "../../assets/service.avif";
import trust2 from "../../assets/trust2.png";
import communication from "../../assets/communication.png";
import laptop from "../../assets/laptop.png";
import requirement from "../../assets/requirement.png";
import './Training.css'

const Training = () => {
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
        <div className="servicePage1R">Home / Training & development</div>
        <div className="servicePage1L">
          <div className="servicePage1L1">Training &</div>
          <div className="servicePage1L2">development</div>
        </div>
      </div>
      <div className="servicePage3">
        <div className="servicePage3P">
          <div className="servicePage31">
            The community of professional recruiters.
          </div>
          <h2>We give The Best Services</h2>
          <div className="servicePage33">
          Being a full-service HR management firm, Bridge Connects Outsourcing HR Services understands the importance of conducting regular training and development sessions for any organization’s growth. Therefore, we have incorporated training and development programs as part of our core services. We conduct specialized training programs for professionals, groups as well as organizations of all stature and sizes.
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
      <div className="questions">
        <h1>Services Provided by Bridge Connects Outsourcing</h1>
        <h2>Customer service training</h2>
           <p> With Workedge's customer service training program, your customer service team will be able to handle customers more responsibly and positively. Our customer interaction training will help your team maintain pleasant customer relationships that will ultimately result in increased customer satisfaction.</p>
        <h2>Sales training</h2>
            <p>Increased sales percentage equals to more profit. However, to accomplish more sales the organization needs an expert sales team. That's why Workedge provides a complete sales training program which covers everything from initial prospect analysis and negotiation skills to selling and account management skills.</p>
        <h2>Learn techniques for successful interview results.</h2>
            <p>With Bridge Connects interview training program, your chances for getting hired will increase drastically. You can learn key techniques for desired interview results such as preparing for the interview, making positive first impression and developing confident body language.</p>
        <h2>Stress management training</h2>
            <p>With Bridge Connects customer service training program, your customer service team will be able to handle customers more responsibly and positively. Our customer interaction training will help your team maintain pleasant customer relationships that will ultimately result in increased customer satisfaction.</p>
        <h2>Time management training</h2>
            <p>With Bridge Connects customer service training program, your customer service team will be able to handle customers more responsibly and positively. Our customer interaction training will help your team maintain pleasant customer relationships that will ultimately result in increased customer satisfaction</p>
        <h2>Customer profiling training</h2>
        <p>Bridge Connect's customer profiling training program can help your business streamline an ideal customer profile, on whom your business should spend
        resources for selling the products or services. In other words, it would help you target the right customers who would bring in the desired revenue.</p>
        <h2>Team building</h2>
            <p>You can take maximum advantage of Bridge Connect's team building programs that would strengthen the interpersonal relationships of your team. Our highly engaging and interactive team building module will bind your team together while making them more cooperative and supportive of each other.</p>
        <h2>Leadership training</h2>
            <p>Bridge Connect's leadership training programs can in still and improve leadership skills in individuals or a group of employees significantly. With our customized tools and techniques, the program caters to leaders at all levels - from aspiring ones to leaders already holding senior most positions.</p>
        <h2>Customized trainings as per company requirements</h2>
            <p>As every organization's training requirements are different, Bridge Connects doesn't stick to one-training-module-fits-all method. We understand your requirements and come up with distinct customized training modules to fulfil them efficiently. Our Services Recruitment Training & Development Career Counselling Contract Manpower Attendance & Payroll Management System</p>
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

export default Training;
