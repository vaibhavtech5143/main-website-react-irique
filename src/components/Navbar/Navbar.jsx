import { Link } from "react-router-dom";
import hrms from "../../assets/media/images/hrms-small-banner.jpeg";
import logo from "../../assets/media/logo.svg";
// import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="contact_minibar nav_man">
          <div className="row m-0 g-0 justify-content-between">
            <div className="col-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a
                    to="https://wa.me/+917777009971"
                    rel="noreferrer"
                    className="nav-link"
                    target="_blank"
                  >
                    <i className="fa-brands fa-whatsapp link-icon-left"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    to="tel:+917777009971"
                    className="nav-link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-phone link-icon-left"></i>
                    <span className="d-none d-md-inline">+917777009971</span>
                  </a>
                </li>
                <li className="nav-item d-none d-md-inline">
                  <a
                    to="mailto:connect@iriquehitech.com"
                    rel="noreferrer"
                    className="nav-link"
                    target="_blank"
                  >
                    <i className="fa-solid fa-envelope link-icon-left"></i>
                    <span className="d-none d-md-inline">
                      connect@iriquehitech.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    <i className="fa-solid fa-envelope link-icon-left"></i>
                    Request a Free Demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg  ">
          <div className="container">
            <Link className="navbar-brand" to="#">
              <img src={logo} height="80" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About&nbsp;Us
                  </Link>
                </li>
                <li className="nav-item dropdown position-static">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products &amp; Services
                  </a>
                  <div
                    className="dropdown-menu mega-menu w-100 mt-0"
                    aria-labelledby="navbarDropdown"
                    style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                    data-bs-popper="static"
                  >
                    <div className="container">
                      <div className="row my-md-4">
                        <div className="col-md-6 col-xl-3 mb-3 mb-xl-0">
                          <div className="pt-2">
                            <p className="text-uppercase font-weight-bold">
                              Featured Product
                            </p>
                            <div
                              className="bg-image hover-overlay shadow-1-strong rounded ripple mb-4"
                              data-bs-ripple-color="light"
                            >
                              <img src={hrms} className="w-100" />
                            </div>
                            <Link to="/products/hrms" className="text-dark">
                              <h5>HRMS on Cloud (SaaS)</h5>
                              <p>
                                Find and hire the right talent – faster and
                                smarter with our AI-powered recruitment
                                platform.
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-5 mb-3 mb-md-0">
                          <div className="list-group list-group-flush">
                            <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                              Our Products
                            </p>
                            <Link
                              className="list-group-item list-group-item-action"
                              to="/products/hrms"
                            >
                              <i className="fa-solid fa-caret-right link-icon-left"></i>
                              Human Resource Management Software
                            </Link>
                            <Link
                              className="list-group-item list-group-item-action"
                              to="/products/hrms"
                            >
                              <i className="fa-solid fa-caret-right link-icon-left"></i>
                              HRMS on Cloud (SaaS)
                            </Link>
                            <Link
                              className="list-group-item list-group-item-action"
                              to="/products/pms"
                            >
                              <i className="fa-solid fa-caret-right link-icon-left"></i>
                              Payroll Management Software
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                          <div className="list-group list-group-flush">
                            <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                              Our Services
                            </p>
                            <a className="list-group-item list-group-item-action">
                              <i className="fa-solid fa-caret-right link-icon-left"></i>
                              Payroll Outsourcing
                            </a>
                            <a className="list-group-item list-group-item-action">
                              <i className="fa-solid fa-caret-right link-icon-left"></i>
                              Compliance Outsourcing
                            </a>
                            <a className="list-group-item list-group-item-action">
                              <i className="fa-solid fa-caret-right link-icon-left"></i>
                              Technology Consulting Services
                            </a>
                            <a className="list-group-item list-group-item-action">
                              <i className="fa-solid fa-caret-right link-icon-left"></i>
                              Business Solutions Consulting
                            </a>
                            <a className="list-group-item list-group-item-action">
                              <i className="fa-solid fa-caret-right link-icon-left"></i>
                              Implementation Strategy Support
                            </a>
                            {/* <!-- <a className="list-group-item list-group-item-action" href="https://iriquehitech.com/product/payroll-outsourcing"><i className="fa-solid fa-caret-right link-icon-left"></i>Payroll Outsourcing</a>
                    <a className="list-group-item list-group-item-action" href="https://iriquehitech.com/product/hrms-on-cloud"><i className="fa-solid fa-caret-right link-icon-left"></i>Compliance Outsourcing</a>
                    <a className="list-group-item list-group-item-action" href="https://iriquehitech.com/product/payroll-management-system"><i className="fa-solid fa-caret-right link-icon-left"></i>Technology Consulting Services</a>
                    <a className="list-group-item list-group-item-action" href="https://iriquehitech.com/product/payroll-management-system"><i className="fa-solid fa-caret-right link-icon-left"></i>Business Solutions Consulting</a>
                    <a className="list-group-item list-group-item-action" href="https://iriquehitech.com/product/payroll-management-system"><i className="fa-solid fa-caret-right link-icon-left"></i>Implementation Strategy Support</a> --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link disabled" to="#">
                    Downloads
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="#">
                    Pricing
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item enquiry">
                  <Link className={"nav-link btn btn-theme-brand"} to="#">
                    <i className="fa-solid fa-envelope link-icon-left"></i>Place
                    an Enquiry
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
