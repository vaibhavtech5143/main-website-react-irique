
import EnquiryForm from "../components/EnquiryForm/EnquiryFrom";
// import "./contact.css";
const Contact = () => {
  return (
    <>
      <main className="contact-page">
        <section id="enquiry">
          <div className="container">
            <div className="section-title mb-4">
              <h1>Contact Us</h1>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                aspernatur ducimus suscipit labore consectetur sed fugit neque
                aliquid voluptatibus obcaecati?
              </p> */}
            </div>
            <div className="row m-0">
              <div className="col-md-6 col-12">
                <EnquiryForm />
              </div>
              <div className="col-md-6 col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.62256422336714!2d72.88133817624403!3d19.109365568574013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93f06462cb7%3A0xd418cbb1b36ea868!2sIrique%20Hi%20Tech%20Software!5e0!3m2!1sen!2sin!4v1685783887662!5m2!1sen!2sin"
                  className="map"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="map"></section>
        <section id="contact">
          <div className="container">
            Office No. 107, 1st Floor,"TIMMY ARCADE", Makvana Road,Marol,
            Andheri(E), Mumbai-400059
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;


// import { useState } from "react";
// // import "./enquiryform.css";
// const EnquiryForm = () => {
//   let [formData, setformData] = useState();
//   let handlechangefun = (e) => {
//     setformData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   console.log(formData);
//   return (
//     <div className="form-wrap">
//       <form method="POST" action="Pages/api_place_enquiry">
//         <div className="mb-3">
//           <label htmlFor="exampleInputName" className="form-label">
//             Your Name
//           </label>
//           <input
//             required
//             type="text"
//             name="name"
//             className="form-control"
//             id="exampleInputName"
//             aria-describedby="nameHelp"
//             onChange={handlechangefun}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputCompany" className="form-label">
//             Company Name
//           </label>
//           <input
//             required
//             type="text"
//             name="company_name"
//             className="form-control"
//             id="exampleInputCompany"
//             aria-describedby="companyHelp"
//             onChange={handlechangefun}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             required
//             type="email"
//             name="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             onChange={handlechangefun}
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputContact" className="form-label">
//             Contact Number
//           </label>
//           <input
//             required
//             type="text"
//             name="contact"
//             className="form-control"
//             id="exampleInputContact"
//             aria-describedby="contactHelp"
//             onChange={handlechangefun}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputSoftware" className="form-label">
//             Select Software
//           </label>
//           <select
//             required
//             name="software"
//             className="form-control"
//             id="exampleInputSoftware"
//             aria-describedby="contactHelp"
//             onChange={handlechangefun}
//           >
//             <option value="HRMS on Cloud (SAAS)">HRMS on Cloud (SAAS)</option>
//             <option value="Payroll Outsourcing">Payroll Outsourcing</option>
//             <option value="Human Resource Management Software">
//               Human Resource Management Software
//             </option>
//             <option value="Payroll Management Software">
//               Payroll Management Software
//             </option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputMessage" className="form-label">
//             Write Your Message
//           </label>
//           <textarea
//             name="message"
//             className="form-control"
//             id="exampleInputMessage"
//             aria-describedby="messageHelp"
//             rows="10"
//             onChange={handlechangefun}
//           ></textarea>
//         </div>
//         <div className="mb-3">
//           <input
//             type="submit"
//             name="enquiry_submit"
//             value="Send Message"
//             className="btn btn-theme-brand"
//             onChange={handlechangefun}
//           />
//           <input
//             type="reset"
//             value="Clear"
//             className="btn btn-theme-light-accent"
//             onChange={handlechangefun}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EnquiryForm;
