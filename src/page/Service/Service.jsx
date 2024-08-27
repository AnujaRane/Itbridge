import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import service from "../../assets/service.avif";
import trust2 from "../../assets/trust2.png";
import communication from "../../assets/communication.png";
import laptop from "../../assets/laptop.png";
import requirement from "../../assets/requirement.png";
import itmlog from "../../assets/itmlogo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { IconButton, Typography } from "@mui/material";

import img3 from "../../assets/img3.jpg";
import green from "../../assets/green.jpeg";
import img4 from "../../assets/img4.jpeg";
import styled from "styled-components";
import img99 from "../../assets/img99.png";
import img22 from "../../assets/img22.jpeg";
import vardh from "../../assets/vardh.png";
import neon from "../../assets/neo.png";
import marlabs from "../../assets/marlabs.png";
import doctor from "../../assets/doctor.png";
import digital from "../../assets/digital.png";
import crestech from "../../assets/crestech.png";
import consult from "../../assets/consult.png";
import trust from "../../assets/trust.png";
import assured from "../../assets/assured.png";
import helo1 from "../../assets/helo1.png";
import helo2 from "../../assets/helo2.avif";
import helo3 from "../../assets/helo3.png";

import helo from "../../assets/helo.svg";
import "./Service.css";
const Service = () => {
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

  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const revealContent = () => {
    const hiddenElements = document.querySelectorAll(".hidden-content");
    hiddenElements.forEach((element) => {
      element.classList.add("visible-content");
    });
  };

  useEffect(() => {
    const delay = 500;
    setTimeout(revealContent, delay);
  }, []);

  return (
    <>
      <Header />
      <div className="aboutwrapper">
        <div className="aboutwrapper1">
          <div className="abouts1">
            <div className="abouts11">A new model for work.</div>
            <div className="abouts12">
              <div className="abouts121">
              At Bridge Connect Solutions, we don’t just work in recruitment; we eat, breathe, and live it.
               Recruitment is at the very heart of our business, and over the years, we've immersed ourselves deeply in the industry.
                With a wealth of industry experience under our belt, we have not only honed our skills but also successfully carved out a niche that distinguishes us from the competition.
                 Our commitment to excellence, innovation, and client satisfaction has allowed us to create a unique space in the recruitment sector.

              The recruitment industry is dynamic, constantly evolving with the needs of businesses and the shifting trends in the labor market. 
              At Bridge Connect Solutions, we understand that recruitment is more than just filling a position; it’s about finding the right person for the right role at the right time.
              This intricate process requires a deep understanding of both the client’s needs and the candidate’s aspirations. Our approach to recruitment is not just transactional; it’s relational.
               We believe in building long-term relationships with our clients and candidates, understanding their evolving needs, and being there as a trusted partner throughout their journey.
              </div>
            
            </div>
          </div>
        </div>
        <div className="huei">
          <img src={helo} alt="" />
        </div>
        <div className="aboutwrapper2">
          <div className="about2l">Employment is changing.</div>
          <div className="about2r">
            <div className="about2r1">
              <div className="about2r11">
                <LanguageIcon />
              </div>
              <div className="about2r12">
                <div className="about2r121">
                  <div className="about2r1211">For companies</div>
                  <div className="about2r1212">
                    Remote, independent work will be a requirement for the next
                    generation of top talents in tech. The companies that
                    embrace it as an opportunity will thrive - rethinking the
                    way they build their teams to take advantage of the
                    incredible pool of on-demand, independent talent and start
                    innovating faster.
                  </div>
                </div>
              </div>
            </div>
            <div className="about2r1">
              <div className="about2r11">
                <PersonIcon />{" "}
              </div>
              <div className="about2r12">
                <div className="about2r121">
                  <div className="about2r1211">For professionals</div>
                  <div className="about2r1212">
                    The era of being just another asset, working on just another
                    gig, in just another corporate setup, is over. A whole new
                    generation of product builders has emerged, seeking
                    opportunities to team-up, build something that matters to
                    them, with the freedom to work from anywhere in the world.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="servicePage1">
        <div className="servicePage1R">Home / Services</div>
        <div className="servicePage1L">
          <div className="servicePage1L1">RECRUITMENT &</div>
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
      <div className="servicePage4a">
        <div className="servicePage41">SERVICES THAT WE PROVIDE</div>
        <div className="servicePage42">Recruitment & HR Sector</div>
        <div className="servicePage43">
          Our mission is to quickly and effectively understand your needs so
          that, with the help of our staffing services, you can locate the right
          applicant or land the perfect job. We guarantee satisfaction for
          businesses and job seekers by offering tailored matching, expedited
          procedures, professional assistance, quality control, and access to a
          vast network.
        </div>
        <div className="servicePage44">
          <div className="servicePage441">
            <div className="servicePage4411">
              <img src={communication} alt="" />
            </div>
            <div className="servicePage4412">IT Consulting</div>
            <div className="servicePage4443">
              By reducing your expenses by 70–75%, Bridge Connect IT experts
              simplify complexity and help you achieve digital success.
            </div>
          </div>
          <div className="servicePage441">
            <div className="servicePage4411">
              <img src={laptop} alt="" />
            </div>
            <div className="servicePage4412">Permanent Staffing</div>
            <div className="servicePage4443">
              Over 2000+ highly skilled employees who are proficient in
              technology. hiring within a brief timeframe.
            </div>
          </div>
          <div className="servicePage441">
            <div className="servicePage4411">
              <img src={requirement} alt="" />
            </div>

            <div className="servicePage4412">Temporary Staffing</div>
            <div className="servicePage4443">
              More than a thousand skilled experts, prompt processing, 100% data
              security, and short placement times.{" "}
            </div>
          </div>
          <div className="servicePage441">
            <div className="servicePage4411">
              <img src={trust2} alt="" />
            </div>
            <div className="servicePage4412">Staff Augmentation</div>
            <div className="servicePage4443">
              Fast and efficient, 100% personalised, completely adaptable.
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="servicePage5">
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
            Outside form
          </div>
        </div>
      </div> */}
      <div className="section5Home">
        <div className="section5HomeWrapper hidden-content">
          <div className="section5HomeHeading">
            Bridge Connect experts answer your questions
          </div>
          <div className="accordianWrapper1">
            <Accordion
              className="acc1"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              style={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h6">
                  How can it help us meet our business objectives?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In the realm of training and development services at Bridge
                  Connect, we recognize the paramount importance of selecting
                  the right technological solutions tailored to meet your unique
                  requirements. With a myriad of options available and countless
                  possible combinations, the initial and crucial step is to
                  identify a reputable and reliable partner.
                  <br /> <br /> At Bridge Connect, our dedicated team of IT
                  experts possesses the necessary expertise to not only answer
                  your questions but also to provide informed insights on each
                  available option. We prioritize guiding you through your
                  digital transformation journey, ensuring that every decision
                  made aligns seamlessly with your organizational goals. To
                  derive the most accurate and beneficial solution, we embark on
                  a comprehensive analysis of your current technological
                  environment and infrastructure. <br /> <br /> By delving into
                  the nuances of how your desktops are organized, the
                  collaborative tools in use, and the measures in place for data
                  security, we gain a holistic understanding of your IT needs.
                  Armed with this information, our IT experts collaborate
                  closely with you to allocate the right resources
                  strategically, addressing immediate challenges while keeping
                  your long-term business objectives at the forefront. At Bridge
                  Connect, we don't just offer technological solutions; we
                  empower you with a thorough plan for your digital
                  transformation journey.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="acc1"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              style={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h6">
                  How can it make my business more competitive?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Bolstering efficiency stands as a pivotal catalyst for
                  business growth. The question is, how do you achieve it? The
                  answer lies in collaboration with experts! <br />
                  <br /> A reliable partner is instrumental in transforming your
                  growth vision into a tangible reality. By aligning your
                  efforts with value-added activities and translating your needs
                  into accessible IT solutions, they play a crucial role in your
                  journey. Whether it's migrating to the cloud and embracing
                  managed services based on your CIO’s recommendations or
                  outsourcing redundant tasks to external resources, ITI experts
                  are here to help craft the right strategy. This enables you to
                  channel your focus on the core purpose of your organization,
                  ensuring that every step taken aligns seamlessly with your
                  goals.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="acc1"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography variant="h6">
                  {" "}
                  How can it make work more flexible and system more secure ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The integration of work flexibility and systems security is
                  not only feasible but also simpler than ever before. <br />{" "}
                  <br />
                  With the appropriate tools, you can streamline collaboration
                  and communication among your teams, enhancing overall
                  productivity. These tools are not only compatible but also
                  seamlessly integrated with modern devices, creating a unified
                  and interconnected environment.
                  <br /> <br />
                  This liberation from routine tasks empowers your IT
                  administrators to efficiently manage and secure the tools and
                  devices employed by your teams.
                  <br /> <br />
                  In the grand scheme, your organization gains increased
                  flexibility, enabling individuals to concentrate on
                  value-added tasks, all within the confines of a secure working
                  environment.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        {/* <div className="infinte">
          <div class="marquee">
            <div class="track">
              <div class="content">
                <img src={doctor} alt="" width="100px" height="50px" />{" "}
                <img src={vardh} alt="" width="100px" height="50px" />{" "}
                <img src={neon} alt="" width="100px" height="50px" />
                <img src={marlabs} alt="" width="100px" height="50px" />
                <img src={digital} alt="" width="100px" height="50px" />
                <img src={crestech} alt="" width="100px" height="50px" />
                <img src={consult} alt="" width="100px" height="50px" />
                <img src={trust} alt="" width="100px" height="50px" />
                <img src={assured} alt="" width="100px" height="50px" />
                <img src={doctor} alt="" width="100px" height="50px" />{" "}
                <img src={vardh} alt="" width="100px" height="50px" />{" "}
                <img src={neon} alt="" width="100px" height="50px" />
                <img src={marlabs} alt="" width="100px" height="50px" />
                <img src={digital} alt="" width="100px" height="50px" />
                <img src={crestech} alt="" width="100px" height="50px" />
                <img src={consult} alt="" width="100px" height="50px" />
                <img src={trust} alt="" width="100px" height="50px" />
                <img src={assured} alt="" width="100px" height="50px" />
                <img src={doctor} alt="" width="100px" height="50px" />{" "}
                <img src={vardh} alt="" width="100px" height="50px" />{" "}
                <img src={neon} alt="" width="100px" height="50px" />
                <img src={marlabs} alt="" width="100px" height="50px" />
                <img src={digital} alt="" width="100px" height="50px" />
                <img src={crestech} alt="" width="100px" height="50px" />
                <img src={consult} alt="" width="100px" height="50px" />
                <img src={trust} alt="" width="100px" height="50px" />
                <img src={assured} alt="" width="100px" height="50px" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Service;
