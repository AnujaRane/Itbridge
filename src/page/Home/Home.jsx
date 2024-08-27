// Home.jsx
import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import img1 from "../../assets/img1.jpg";
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
import trust2 from "../../assets/trust2.png";
import communication from "../../assets/communication.png";
import laptop from "../../assets/laptop.png";
import requirement from "../../assets/requirement.png";
import helo1 from "../../assets/helo1.png";
import helo2 from "../../assets/helo2.avif";
import helo3 from "../../assets/helo3.png";
import "./Home.css";

const AccordionContainer = styled.div`
  .whysw2l132 {
    max-height: ${(props) =>
      props.isOpen ? "200px" : "0"}; /* Adjust max-height as needed */
    transition: max-height 0.5s ease-out, opacity 0.5s ease-out,
      transform 0.5s ease-out;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(20px)"};
    overflow: hidden;
  }
`;

const AccordionContent = styled.div`
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out,
    transform 0.5s ease-out;
  max-height: ${(props) =>
    props.isOpen ? "200px" : "0"}; /* Adjust max-height as needed */
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(20px)"};
  overflow: hidden;
`;

const AccordionText = styled.div`
  font-size: 17px;
  opacity: 0.7;

  @media (max-width: 468px) {
    font-size: 13px; /* Adjust font size for tablets and small screens */
  }
`;
function throttle(callback, delay) {
  let previousCall = new Date().getTime();
  return function () {
    const time = new Date().getTime();

    if (time - previousCall >= delay) {
      previousCall = time;
      callback.apply(null, arguments);
    }
  };
}

const Home = () => {
  //Custom cursor

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  };
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleAccordion5 = () => {
    setIsOpen5(!isOpen5);
  };

  //

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

  // carousel

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const autoNextTimeout = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 3000;

  const items = [
    {
      imgSrc:
        "https://fastly.picsum.photos/id/429/200/200.jpg?hmac=9FwQwE20mRBTbcAmKXOhnDdpvTgru3vSGriKkpK0kI4",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
      sequi, rem magnam nesciunt minima placeat, itaque eum neque
      officiis unde, eaque optio ratione aliquid assumenda facere ab et
      quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
      nisi reprehenderit tempora at laborum natus unde. Ut,
      exercitationem eum aperiam illo illum laudantium?`,
    },
    {
      imgSrc:
        "data:image/jpeg;base64,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",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
      sequi, rem magnam nesciunt minima placeat, itaque eum neque
      officiis unde, eaque optio ratione aliquid assumenda facere ab et
      quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
      nisi reprehenderit tempora at laborum natus unde. Ut,
      exercitationem eum aperiam illo illum laudantium?`,
    },
    {
      imgSrc:
        "https://fastly.picsum.photos/id/429/200/200.jpg?hmac=9FwQwE20mRBTbcAmKXOhnDdpvTgru3vSGriKkpK0kI4",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
      sequi, rem magnam nesciunt minima placeat, itaque eum neque
      officiis unde, eaque optio ratione aliquid assumenda facere ab et
      quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
      nisi reprehenderit tempora at laborum natus unde. Ut,
      exercitationem eum aperiam illo illum laudantium?`,
    },
    {
      imgSrc:
        "https://fastly.picsum.photos/id/429/200/200.jpg?hmac=9FwQwE20mRBTbcAmKXOhnDdpvTgru3vSGriKkpK0kI4",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
      sequi, rem magnam nesciunt minima placeat, itaque eum neque
      officiis unde, eaque optio ratione aliquid assumenda facere ab et
      quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
      nisi reprehenderit tempora at laborum natus unde. Ut,
      exercitationem eum aperiam illo illum laudantium?`,
    },
  ];

  const nextSlide = () => {
    setIsNext(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setIsNext(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    autoNextTimeout.current = setTimeout(nextSlide, timeAutoNext);
    return () => clearTimeout(autoNextTimeout.current);
  }, [currentIndex]);
  return (
    <>
      <Header />
      <div className="section1Home hidden-content">
        <div className="section1Topmerged">
          <div className="section1Topmergedleft">Home / Bridge Connect</div>
          <div className="section1Topmergedright">
            <div className="section1TopmergedrightTop">CONNECTING TALENTS,</div>
            <div className="section1TopmergedrightBottom">
              BUILDING FUTURES.
            </div>
          </div>
        </div>
        <div className="section12">
          <div className="section1LeftHome">
            <div className="section1LeftHome2">
              Being the cornerstone of career progress and professional
              connections is something we at Bridge Connect Solutions take great
              pride in. Our goal, since our founding in 2023, has been to
              effectively close the talent gap that exists between innovative
              companies and skilled workers. With a wide range of service
              specializations, we are more than just a recruiting company—we
              create professional futures.
            </div>
            <div className="section1LeftHome3">
              <a href="https://www.linkedin.com/company/bridge-connect-solution/">
                {" "}
                <IconButton
                  style={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    padding: "10px",
                    fontSize: "24px",
                  }}
                >
                  <LinkedInIcon style={{ color: "white" }} />
                </IconButton>
              </a>

              <IconButton
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  padding: "10px",
                  fontSize: "24px",
                }}
              >
                <TwitterIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  padding: "10px",
                  fontSize: "24px",
                }}
              >
                <FacebookIcon style={{ color: "white" }} />
              </IconButton>
            </div>
          </div>
          <div className="section1RightHome">
            <div className="section1RightHome2">
              <div class="containerrBtn1">
                <a className="anchorBtn1" href="#">
                  <span className="spanBtn">Discover +</span>
                </a>
              </div>
            </div>
            <div className="section1RightHome3">
              <div className="imgrection1righthome3">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="a80vw">
        <div className="scetion2Home hidden-content">
          <div className="whysw">
            <div className="whysw1">Why Bridge Connect?</div>
            <div className="whysw2">
              <div className="huiz">
                <div className="whysw2l" onClick={toggleAccordion}>
                  <AccordionContainer isOpen={isOpen} className="whysw2l">
                    <div className="whysw2l1">
                      <div className="whysw2l11">-</div>
                      <div className="whysw2l12">Only pay if you hire</div>
                      <div className="whysw2l13">
                        <div className="whysw2l131">
                          <div className="whysw2l1311">
                            <img src={green} alt="" />
                          </div>
                          <div className="whysw2l1312"> No hidden costs</div>
                        </div>
                        <AccordionContent
                          isOpen={isOpen}
                          className="whysw2l132"
                        >
                          <AccordionText>
                            Our platform is completely free to use. This means
                            that you can meet our talent and decide if they
                            would be able to lift off that rocketship with you -
                            free of charge!
                          </AccordionText>
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionContainer>
                </div>
                {/* <div className="whysw2l" onClick={toggleAccordion2}>
                  <AccordionContainer isOpen={isOpen2} className="whysw2l">
                    <div className="whysw2l1">
                      <div className="whysw2l11z">-</div>
                      <div className="whysw2l12z">Transparency</div>
                      <div className="whysw2l13">
                        <div className="whysw2l131h">
                          <div className="whysw2l1311">
                            <img src={green} alt="" />
                          </div>
                          <div className="whysw2l1312"> 15 %</div>
                        </div>
                        <AccordionContent
                          isOpen={isOpen2}
                          className="whysw2l132"
                        >
                          <AccordionText>
                            Bridge Connect takes 15% on top of a member's hourly
                            rate. Our members decide their hourly rates and keep
                            100% of the earnings, and we match companies with
                            talent within their budgets. Simple. Transparent.
                          </AccordionText>
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionContainer>
                </div> */}
                <div className="whysw2l" onClick={toggleAccordion3}>
                  <AccordionContainer isOpen={isOpen3} className="whysw2l">
                    <div className="whysw2l1">
                      <div className="whysw2l11">-</div>
                      <div className="whysw2l12">Flexibility</div>
                      <div className="whysw2l13">
                        <div className="whysw2l131">
                          <div className="whysw2l1311">
                            <img src={green} alt="" />
                          </div>
                          <div className="whysw2l1312">Scale up and down</div>
                        </div>
                        <AccordionContent
                          isOpen={isOpen3}
                          className="whysw2l132"
                        >
                          <AccordionText>
                            Flexibility in scalability. No binding contracts -
                            you can terminate within 30 days with freedom. No
                            obligation to continue hiring through Bridge
                            Connect. Only stay if you absolutely love our
                            members - like we do!
                          </AccordionText>
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionContainer>
                </div>{" "}
                <div className="whysw2l" onClick={toggleAccordion4}>
                  <AccordionContainer isOpen={isOpen4} className="whysw2l">
                    <div className="whysw2l1">
                      <div className="whysw2l11z">-</div>
                      <div className="whysw2l12z">Quality guarantee</div>
                      <div className="whysw2l13">
                        <div className="whysw2l131h">
                          {/* <div className="whysw2l1311">
                            <img src={green} alt="" />
                          </div> */}
                          <div className="whysw2l1312">Pre-vetted</div>
                        </div>
                        <AccordionContent
                          isOpen={isOpen4}
                          className="whysw2l132"
                        >
                          <AccordionText>
                            Every member goes through our 4-step screening
                            process. Only the very best make it through (5%),
                            ensuring you meet some of the best talents out
                            there.
                          </AccordionText>
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionContainer>
                </div>{" "}
                <div className="whysw2l" onClick={toggleAccordion5}>
                  <AccordionContainer isOpen={isOpen5} className="whysw2l">
                    <div className="whysw2l1">
                      <div className="whysw2l11z">-</div>
                      <div className="whysw2l12z">Matching speed</div>
                      <div className="whysw2l13">
                        <div className="whysw2l131h">
                          {/* <div className="whysw2l1311">
                            <img src={green} alt="" />
                          </div> */}
                          <div className="whysw2l1312">48 hours</div>
                        </div>
                        <AccordionContent
                          isOpen={isOpen5}
                          className="whysw2l132"
                        >
                          <AccordionText>
                            You will see at least 1 perfect match to your role
                            within 48 hours. On average, we present around 3
                            matches within the first 72 hours.
                          </AccordionText>
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionContainer>
                </div>
              </div>
              <div className="whysw2r">
                <div className="whysw2r1">Customer stories</div>
                <div className="whysw2r2">
                  <img src={img99} alt="" />
                </div>
                <div className="whysw2r3">
                  <img src={img22} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="scetion2HomeTop">Why Choose Us ?</div>
        <div className="scetion2HomeBottomWrapper">
          <div className="scetion2HomeBottom">
            <div className="timeline">
              <div className="checkpoints">
                <div>
                  <p>
                    Access to top-tier talent in both IT and Non-IT sectors.
                  </p>
                </div>
              </div>
              <div className="checkpoints">
                <div>
                  <p>
                    Streamlined recruitment and staffing processes for optimal
                    efficiency.
                  </p>
                </div>
              </div>{" "}
              <div className="checkpoints">
                <div>
                  <p>
                    Expert outsourcing services to enhance business operations.
                  </p>
                </div>
              </div>{" "}
              <div className="checkpoints">
                <div>
                  <p>
                    Comprehensive training and development programs for skill
                    enhancement.
                  </p>
                </div>
              </div>{" "}
              <div className="checkpoints">
                <div>
                  <p>
                    Specialized career counseling services for aspiring
                    professionals.
                  </p>
                </div>
              </div>
              <div className="checkpoints">
                <div>
                  <p>
                    Advanced solutions in attendance and payroll management.
                  </p>
                </div>
              </div>{" "}
              <div className="checkpoints">
                <div>
                  <p>
                    Strategic HR consulting to tackle organizational challenges.
                  </p>
                </div>
              </div>{" "}
              <div className="checkpoints">
                <div>
                  <p>Proactive campus placement initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>

      <div className="contactbtnnnn">
        <div className="contactbtnnnnt">The future of work starts here.</div>
        <div className="contact-container">
          <div className="contact-line"></div>
          <div className="contactbtnnnnb">
            <button
              onClick={() => {
                window.open(
                  "https://calendly.com/instafollower641/30min",
                  "_blank"
                );
              }}
            >
              {" "}
              Book a Demo
            </button>
          </div>
          <div className="contact-line"></div>
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
              {/* <img src={trust2} alt="" /> */}
              <img src={communication} alt="" />
            </div>
            <div className="servicePage4412">IT Consulting</div>
            <div className="servicePage4443">
              By reducing your expenses by 70–75%, Bridge Connect IT experts
              simplify complexity and help you achieve digital success.
            </div>
          </div>
          <div className="servicePage4419">
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
              {/* <img src={laptop} alt="" /> */}
              <img src={requirement} alt="" />
            </div>

            <div className="servicePage4412">Temporary Staffing</div>
            <div className="servicePage4443">
              More than a thousand skilled experts, prompt processing, 100% data
              security, and short placement times.{" "}
            </div>
          </div>
          <div className="servicePage4414">
            <div className="servicePage4411">
              {/* <img src={requirement} alt="" /> */}
              <img src={trust2} alt="" />
            </div>
            <div className="servicePage4412">Staff Augmentation</div>
            <div className="servicePage4443">
              Fast and efficient, 100% personalised, completely adaptable.
            </div>
          </div>
        </div>
      </div>
      <div className="a80vw">
        <div className="whysw">
          <div className="whysw133">
            <div className="whysw11"> How to hire through Bridge Connect?</div>
            <div className="whysw12">{/* <button>as</button> */}</div>
          </div>
          <div className="whyhelo">
            <div className="whyhelo1">
              <div className="whyhelo11">
                <div className="whyhelo111">1. Tell us what you need.</div>
                <div className="whyhelo112">
                  Once you've established contact with us, you begin by
                  outlining your needs.{" "}
                </div>
              </div>
              <div className="whyhelo12">
                <div className="huihui">
                  <img src={helo1} alt="" />
                </div>
              </div>
            </div>
            <div className="whyhelo2">
              {" "}
              <div className="whyhelo11">
                <div className="whyhelo111">
                  2. We'll find your new talent in 2 days.
                </div>
                <div className="whyhelo112">
                  Our matching engine will start sourcing in the society for
                  perfect matches and present them on the platform. Review the
                  matches, set-up interviews and negotiate rates.
                </div>
              </div>
              <div className="whyhelo12">
                <div className="huihui">
                  {" "}
                  <img src={helo2} alt="" />
                </div>
              </div>
            </div>
            <div className="whyhelo3">
              {" "}
              <div className="whyhelo11">
                <div className="whyhelo111">3. All set – time to build!</div>
                <div className="whyhelo112">
                  That’s it. You can now hire your new team members directly on
                  the platform without any legal hassle or crazy fees.
                </div>
              </div>
              <div className="whyhelo12">
                <div className="huihui">
                  {" "}
                  <img src={helo3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactbtnnnn">
        <div className="contactbtnnnnt">Ready to build your dream team?</div>
        <div className="contact-container">
          <div className="contact-line"></div>
          <div className="contactbtnnnnb">
            <button
              onClick={() => {
                window.open(
                  "https://calendly.com/instafollower641/30min",
                  "_blank"
                );
              }}
            >
              Meet them for free
            </button>
          </div>
          <div className="contact-line"></div>
        </div>
      </div>

      {/* <div className="section3Home hidden-content">
        <img
          src="https://iti.ca/uploads/2020/06/Moyennes-entreprises_image-seule_1298x793.jpg"
          alt="Your Image Description"
        />
      </div> */}
      {/* 
      <div className="section6Home hidden-content">
        <div className="section6HomeWrapper">
          <div className="section6HomeHeading1">Contact Us</div>
          <div className="section6HomeHeading2">
            TALK TO ONE OF OUR IT EXPERTS.
          </div>
          <div className="section6HomeHeading3">
            Understand, guide, implement. That’s what our IT experts do best,
            and they’re standing by to create your tailor-made solution!
          </div>
          <div class="containerbtn2">
            <a className="anchorBtn2" href="/contact">
              <span className="spanBtn">Contact an IT expert</span>
            </a>
          </div>
        </div>
      </div> */}
      {/* <div className="section7Home hidden-content">
        <div className="section7HomeLeft">
          <div className="section7Home1">Training Solutions</div>
          <div className="section7Home2">OUR TRAINING SOLUTIONS</div>
          <div className="section7Home1">
            <div class="containerbtn3">
              <a className="anchorBtn3" href="#">
                <span className="spanBtn">Training Solutions</span>
              </a>
            </div>
          </div>
        </div>
        <div className="section7HomeRight">
          <div className="section7HomeRightimg">
            <img src={img3} alt="" />
          </div>
        </div>
      </div> */}
      <div className="section5Home hidden-content">
        {/* <div className="section5HomeWrapper hidden-content">
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
        </div> */}
        <div className="infinte">
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
        </div>
      </div>
      {/* <div className="section7Home hidden-content">
        <div className="section7HomeLeft">
          <div className="section7Home1">Human Solutions</div>
          <div className="section7Home2">OUR HUMAN SOLUTIONS</div>
          <div className="section7Home1">
            <div class="containerbtn3">
              <a className="anchorBtn3" href="#">
                <span className="spanBtn">Human Solutions</span>
              </a>
            </div>
          </div>
        </div>
        <div className="section7HomeRight1">
          <div className="section7HomeRightimg">
            <img src={img4} alt="" />
          </div>
        </div>
      </div> */}
      <div className="section11Home"></div>
      <Footer />
    </>
  );
};

export default Home;
