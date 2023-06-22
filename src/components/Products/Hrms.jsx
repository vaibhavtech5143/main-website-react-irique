import cloud from "../../assets/media/images/cloud-payroll.png";
import slide from "../../assets/media/images/slide-img.jpg";
import hrms from "../../assets/media/images/hrms-sq.jpg";
import { Link } from "react-router-dom";

const Hrms = () => {
  return (
    <>
      <main id="products-page">
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
        <section id="products">
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
                  <h2 data-aos="fade-left" className="aos-init">
                    Exceptional journey <b>before and after joining</b>
                  </h2>
                  <p>
                    Find and hire the right talent – faster and smarter with our
                    AI-powered recruitment platform
                  </p>
                  <Link to="/products/hrms" className="btn btn-theme-brand">
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
                  <h2 data-aos="fade-left" className="aos-init">
                    <b>Payroll</b> that goes beyond a paycheck
                  </h2>
                  <p>
                    Simplify enterprise payroll with accurate, automated, and
                    100% payroll compliant processes
                  </p>
                  <Link to="/products/pms" className="btn btn-theme-brand">
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
                  <h2 data-aos="fade-left" className="aos-init">
                    Exceptional journey <b>before and after joining</b>
                  </h2>
                  <p>
                    Find and hire the right talent – faster and smarter with our
                    AI-powered recruitment platform
                  </p>
                  <Link to="/products/hrms" className="btn btn-theme-brand">
                    Learn More
                    <i className="fa-solid fa-arrow-right link-icon-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="upper_footer">
          <div className="container">
            <h2 className="section-title">
              Have questions about how to manage and simplify your business
              using software?
            </h2>
            <p>Book a free demo session with one of our expert consultants.</p>
            <a className="btn btn-theme-dark-accent" href={`/put-enquiry`}>
              <i className="fa-solid fa-envelope link-icon-left"></i>
              Request a Free Demo
            </a>
          </div>
        </section>
        {/* <!-- <section id="reviews">
            Reviews
        </section>
        <section id="talk">
            Talk to us
        </section> --> */}
      </main>
    </>
  );
};

export default Hrms;
