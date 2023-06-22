import React from "react";
import Logo from "../../assets/media/logo.svg";

import startupindia from "../../assets/media/images/startupindia.png";
// import "./footer.css"
const Footer = () => {

  return (
    <footer>

      <section className="wrapper">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-3 col-12">
              <a className="navbar-brand footer-logo" href="#">
                <img src={Logo} height="80" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-12">
              <a className="btn btn-theme-dark-accent mb-3" href="mailto:contact@iriquehitech.com">
                <i className="fa-solid fa-envelope link-icon-left"></i>
                contact@iriquehitech.com
              </a>
            </div>

            <div className="col-lg-3 col-12">
              <a className="btn btn-theme-light-accent mb-3" href="" >
                <i className="fa-solid fa-envelope link-icon-left"></i>
                Place an Enquiry
              </a>
            </div>
            {/* <div className="col-lg-3 col-12">Whatsapp/Call</div> */}
          </div>
          <div className="row m-0">
            <div className="col-xl-3 col-lg-4 col-12">
              <section>
                <p>
                Irique Innovations assist customers in selecting the right technology stacks for their solutions. Be it a programming language or a ready-to-use platform, we help business review technologies pros and cons before starting business.
                  
                </p>
              </section>
              {/* <section className="social">
                <ul className="nav">
                  <li className="nav-item">
                    <a href="" className="nav-link social-icon">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link social-icon">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link social-icon">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link social-icon">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link social-icon">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </section> */}
              <section>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        India
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Address:<br />
                        107, 1st Floor,Timmy Arcade, <br />
                        Makvana Road,Marol, <br />
                        Andheri(E), Mumbai-400059
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Singapore
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      Address:<br/>
                                        25 NORTH BRIDGE, <br/>
                                        SINGAPORE - 179104;
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <h5>Products & Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    Payroll Outsourcing
                  </a>
                </li>
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    Human Resource Management Software
                  </a>
                </li>
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    HRMS on Cloud (SAAS)
                  </a>
                </li>
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    Payroll Management Software
                  </a>
                </li>
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    Product 1
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <h5>Industries</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    Banking and Financial Services
                  </a>
                </li>
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    IT and IT-enabled Services
                  </a>
                </li>
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    Retail
                  </a>
                </li>
                <li>
                  <a href="" className="nav-item">
                    <i className="fa-solid fa-caret-right link-icon-left"></i>
                    Pharma and Healthcare
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <section className="startup bg-white">
                <img src={startupindia} alt="" className="w-100" />
              </section>
            </div>
          </div>
          <section className="copyrights py-3">
            <p className="sm:text-3xl text-2xl font-semibold title-font mob-d">
              &copy; {new Date().getFullYear()} <a href="/">Irique Hitech</a>,
              All Rights Reserved.
            </p>
          </section>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
