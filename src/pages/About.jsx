import slide from "../assets/media/images/slide-img.jpg";
import { Link } from "react-router-dom";
import hrms from "../assets/media/images/hrms-sq.jpg";
import cloud from "../assets/media/images/cloud-payroll.png";
import consulting from "../assets/media/images/services/consulting.png";
import business from "../assets/media/images/services/business.png";
import website from "../assets/media/images/services/website.png";
import saas from "../assets/media/images/services/saas.png";
import custom from "../assets/media/images/services/custom.png";
import automation from "../assets/media/images/services/automation.png";
import cyber from "../assets/media/images/services/cybersecurity.png";
import cyberPro from "../assets/media/images/services/cyberprotection.png";
import networking from "../assets/media/images/services/networksecurity.png";
// import "../"
const About = () => {
  return (
    <div>
      <main id="about-page">
        <section id="hero">
          <div className="container">
            <div className="row m-0 align-items-center">
              <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                <h5>#PowerTheTalent</h5>
                <h2 data-aos="fade-left" className="aos-init aos-animate">
                  We power the <b>momentum</b> of modern talent-focused
                  enterprises
                </h2>
                <p>
                  Our technology is a reflection of the growing needs of modern,
                  talent-focused enterprises and their increasingly complex HR
                  use cases; of people and business leaders who want technology
                  to do more. We are on a mission to power the Talent Economy.
                </p>
                {/* <!-- <a href="" className="btn btn-theme-brand">Learn More<i className="fa-solid fa-arrow-right link-icon-right"></i></a> -->
                        <!-- <p className="text-muted mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolores. Beatae enim porro perspiciatis obcaecati ex neque nostrum debitis eius.</p> --> */}
              </div>
              <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                <img src={slide} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- <section id="why">
            Why Choose Us?
        </section> --> */}
        <section id="what">
          <div className="container">
            <div className="section-title">
              <h2>
                Our <b>Products</b>
              </h2>
              {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolores deserunt perferendis eos, ut itaque. Cumque nisi nobis ducimus dolorum!</p> --> */}
            </div>
            <div className="product">
              <div className="row m-0 align-items-center">
                <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                  <img src={hrms} className="w-100" alt="" />
                </div>
                <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                  <h5>#BringHRMSonCloud</h5>
                  <h2 data-aos="fade-left" className="aos-init aos-animate">
                    Exceptional journey <b>before and after joining</b>
                  </h2>
                  <p>
                    Find and hire the right talent – faster and smarter with our
                    AI-powered recruitment platform
                  </p>
                  <Link to="/product/hrms" className="btn btn-theme-brand">
                    Learn More
                    <i className="fa-solid fa-arrow-right link-icon-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="row m-0 flex-row-reverse align-items-center">
                <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                  <img src={cloud} className="w-100" alt="" />
                </div>
                <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                  <h5>#CloudPayrollWithUs</h5>
                  <h2 data-aos="fade-left" className="aos-init aos-animate">
                    <b>Payroll</b> that goes beyond a paycheck
                  </h2>
                  <p>
                    Simplify enterprise payroll with accurate, automated, and
                    100% payroll compliant processes
                  </p>
                  <Link
                    to="/product/payroll-management-system"
                    className="btn btn-theme-brand"
                  >
                    Learn More
                    <i className="fa-solid fa-arrow-right link-icon-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="row m-0 align-items-center">
                <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                  <img src={hrms} className="w-100" alt="" />
                </div>
                <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                  <h5>#BringHRMSonCloud</h5>
                  <h2 data-aos="fade-left" className="aos-init aos-animate">
                    Exceptional journey <b>before and after joining</b>
                  </h2>
                  <p>
                    Find and hire the right talent – faster and smarter with our
                    AI-powered recruitment platform
                  </p>
                  <Link
                    to="/product/hrms-on-cloud"
                    className="btn btn-theme-brand"
                  >
                    Learn More
                    <i className="fa-solid fa-arrow-right link-icon-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="technologies">
          <div className="container">
            <div className="section-title">
              <h5>#TechnicalServices</h5>
              <h2 data-aos="fade-left" className="aos-init aos-animate">
                We serve a wide range of companies
              </h2>
              <p>
                Irique Hitech offers the following services to aspiring
                entrepreneurs looking to get their businesses off of the ground.
              </p>
            </div>
            <div className="services">
              <div className="row m-0 justify-content-around">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="service">
                    <div className="media-content">
                      <img src={consulting} alt="" />
                    </div>
                    <div className="text-content">
                      <h3>
                        <b>Technology Consulting</b> Services
                      </h3>
                      <p>
                        Innovations assist customers in selecting the right
                        technology stacks for their solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="service">
                    <div className="media-content">
                      <img src={business} alt="" />
                    </div>
                    <div className="text-content">
                      <h3>
                        <b>Business Solutions</b> Consulting
                      </h3>
                      <p>
                        When companies have doubts about choosing the right
                        software for their challenges.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="service">
                    <div className="media-content">
                      <img src={website} alt="" />
                    </div>
                    <div className="text-contend">
                      <h3>
                        <b>Website &amp; Application</b> Development
                      </h3>
                      <p>
                        Developing customized websites &amp; applications with
                        Digital Marketing ensuring a highly satisfying user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="service">
                    <div className="media-content">
                      <img src={saas} alt="" />
                    </div>

                    <div className="text-content">
                      <h3>
                        <b>SaaS</b> Development
                      </h3>
                      <p>
                        Developing custom solutions for SaaS companies to
                        provide their clients with access to online
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="service">
                    <div className="media-content">
                      <img src={custom} alt="" />
                    </div>
                    <div className="text-content">
                      <h3>
                        <b>Custom Product</b> Development
                      </h3>
                      <p>
                        In order to generate revenue through monetization,
                        custom product development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="service">
                    <div className="media-content">
                      <img src={automation} alt="" />
                    </div>
                    <div className="text-content">
                      <h3>
                        <b>Digital</b> Process Automation
                      </h3>
                      <p>
                        Design &amp; implement process architectures, establish
                        process measurement solutions in alignment with your
                        goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="service">
                    <div className="media-content">
                      <img src={cyber} alt="" />
                    </div>
                    <div className="text-content">
                      <h3>
                        Cyber <b>Security</b>
                      </h3>
                      <p>
                        Cybersecurity is the protection of internet-connected
                        systems such as hardware, software and data from
                        cyberthreats.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="service">
                    <div className="media-content">
                      <img src={cyberPro} alt="" />
                    </div>
                    <div className="text-content">
                      <h3>
                        Cyber <b>Protection</b>
                      </h3>
                      <p>
                        Cyber protection refers to the set of measures and
                        practices that are implemented to safeguard digital
                        devices, networks, systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="service">
                    <div className="media-content">
                      <img src={networking} alt="" />
                    </div>
                    <div className="text-content">
                      <h3>
                        <b>Networking and Data</b> Protection
                      </h3>
                      <p>
                        Networking and data protection are closely related
                        concepts in the field of cybersecurity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="upper_footer">
        <div className="container">
          <h2 className="section-title">
            Have questions about how to manage and simplify your business using
            software?
          </h2>
          <p>Book a free demo session with one of our expert consultants.</p>
          <a className="btn btn-theme-dark-accent" href={`/put-enquiry`}>
            <i className="fa-solid fa-envelope link-icon-left"></i>
            Request a Free Demo
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
