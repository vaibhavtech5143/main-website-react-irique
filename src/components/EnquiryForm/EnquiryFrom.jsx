// import "./enquiryform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
// import { Logger } from 'sass';
// import "./enquiryform.css";
const EnquiryForm = () => {
  const [formData, setFormData] = useState({}); // Set initial state for formData
  const handlechangefun = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(formData);
  let emptyformData = () => {
    setFormData({});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mongo-backend-rajnishad24082003.vercel.app/contact",
        { ...formData }, // Wrap formData inside an object with a key 'data'
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Form submitted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Form submission failed!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Form submission failed!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    emptyformData();
  };

  // console.log(formData);
  return (
    <div className="form-wrap">
      {/* <form method="POST" action="Pages/api_place_enquiry"> */}
      {/* onSubmit={handleSubmit} */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Your Name
          </label>
          <input
            required
            type="text"
            value={formData.customerName ? formData.customerName : ""}
            name="customerName"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            onChange={handlechangefun}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputCompany" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            value={formData.companyName ? formData.companyName : ""}
            name="companyName"
            className="form-control"
            id="exampleInputCompany"
            aria-describedby="companyHelp"
            onChange={handlechangefun}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            required
            type="email"
            value={formData.emailAddress ? formData.emailAddress : ""}
            name="emailAddress"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handlechangefun}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputContact" className="form-label">
            Contact Number
          </label>
          <input
            required
            type="text"
            value={formData.contactNumber ? formData.contactNumber : ""}
            name="contactNumber"
            className="form-control"
            id="exampleInputContact"
            aria-describedby="contactHelp"
            onChange={handlechangefun}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputSoftware" className="form-label">
            Select Software
          </label>
          <select
            required
            value={formData.selectSoftware ? formData.selectSoftware : ""}
            name="selectSoftware"
            className="form-control"
            id="exampleInputSoftware"
            aria-describedby="contactHelp"
            onChange={handlechangefun}
          >
            <option value="Other">Select an option</option>
            <option value="HRMS on Cloud (SAAS)">HRMS on Cloud (SAAS)</option>
            <option value="Payroll Outsourcing">Payroll Outsourcing</option>
            <option value="Human Resource Management Software">
              Human Resource Management Software
            </option>
            <option value="Payroll Management Software">
              Payroll Management Software
            </option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputMessage" className="form-label">
            Write Your Message
          </label>
          <textarea
            name="message"
            value={formData.message ? formData.message : ""}
            className="form-control"
            id="exampleInputMessage"
            aria-describedby="messageHelp"
            rows="10"
            onChange={handlechangefun}
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            type="submit"
            name="enquiry_submit"
            value="Send Message"
            className="btn btn-theme-brand mx-2"
            // onChange={handlechangefun}
          />
          <input
            type="reset"
            value="Clear"
            className="btn my-2 btn-theme-light-accent"
            // onChange={handlechangefun}
          />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default EnquiryForm;
