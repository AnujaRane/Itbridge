import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import itmlog from "../../assets/itmlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenuOnClick = (e) => {
      // Check if the clicked element is not an anchor tag
      if (!e.target.closest("a") && !e.target.closest(".burger-menu")) {
        setIsOpen(false);
      }
    };

    // Adding event listener to close menu when clicked outside
    document.body.addEventListener("click", closeMenuOnClick);

    // Cleanup function to remove event listener
    return () => {
      document.body.removeEventListener("click", closeMenuOnClick);
    };
  }, []);

  return (
    <>
      <div className={`header ${isOpen ? "open" : ""}`}>
        <div className={`wrappernav ${isOpen ? "menu-open" : ""}`}>
          <div className="logoNav">
            <Link className="imglogo" to="/">
              <img src={itmlog} alt="" />
            </Link>
          </div>
          <ul className="links">
            <Link to="/">For Companies</Link>
            <Link to="/">For Aspiration</Link>
            <Link to="#">For Talents</Link>
            <Link to="#">Pricing</Link>
            <NavLink to="/service" activeClassName="active">
              About
            </NavLink>
            <Link to="#">Newsroom</Link>
            <NavLink to="/contact" activeClassName="active">
              Login
            </NavLink>
          </ul>
          <div className="section3Nav">
            <p></p>
            <div className="burger-menu" onClick={toggleMenu}>
              <div className={`burger-icon ${isOpen ? "open" : ""}`}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </div>

            {isOpen && (
              <div className="menu">
                <div className="menuSubwrapper">
                  <div className="menuSubwrapper1">
                    <p className="pA">Explore Bridge Connect</p>
                    <div className="a1">
                      <Link to="/">For Companies</Link>
                      <Link to="#">For Talents</Link>
                      <Link to="#">For Aspiration</Link>
                      <Link to="#">Pricing</Link>
                      <Link to="/Service">About</Link>
                      <Link to="#">Newsroom</Link>
                      <Link to="#">Login</Link>
                    </div>
                  </div>
                  <div className="menuSubwrapper2">
                    <p className="pA">More from Services</p>
                    <div className="a2">
                      <Link to="/recruitment">Recruitment and Staffing</Link>
                      <Link to="/outsourcing">Outsourcing</Link>
                      <Link to="/training">Training and Development</Link>
                      <Link to="/career">Career Counseling</Link>
                      <Link to="/payroll">Attendance Payroll Management</Link>
                      <Link to="/consulting">HR Consulting</Link>
                      <Link to="/Campus">Campus Placement</Link>
                    </div>
                  </div>
                  <div className="menuSubwrapper5">
                    <p className="pA">Recruitment and Staffing</p>
                    <div className="a5">
                      <Link to="/itStaff">IT Staffing</Link>
                      <Link to="/nonItStaff">Non IT-Staffing</Link>
                      <Link to="/staffingSolution">Staffing Solution</Link>
                      <Link to="/permanentStaffing">Permanent Staffing</Link>
                      <Link to="/temporaryStaffing">Temporary Staffing</Link>
                      <Link to="/contractualStaffing">Contractual Staffing</Link>
                    </div>
                  </div>{" "}
                  <div className="menuSubwrapper4">
                    <p className="pA">More on Out Sourcing</p>
                    <div className="a4">
                      <Link to="/employment">Virtual Employment</Link>
                      <Link to="/servicesConsulting">IT Services and Consulting</Link>
                      <Link to="/thirdPartyPayroll">Third-party Payroll Services</Link>
                    </div>
                  </div>
                  <div className="menuSubwrapper3">
                    <p className="pA">More on IT Services</p>
                    <div className="a3">
                      <Link to="#">Mobile Application</Link>
                      <Link to="#">Web App Development</Link>
                      <Link to="/service">ERP</Link>
                      <Link to="#">UI/UX Design</Link>
                      <Link to="#">Digital Marketing</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="container">
              <Link className="anchorBtn" to="/contact">
                <span className="spanBtn">Let's Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
