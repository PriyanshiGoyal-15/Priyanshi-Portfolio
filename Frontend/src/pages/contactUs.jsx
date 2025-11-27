import React, { useState } from "react";
import "../pages/contactus.css";
import contactimg from "../pages/Contact+Me.webp";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setShowPopup(true);
          setFormData({ name: "", email: "", phoneNumber: "", message: "" });
          setTimeout(() => setShowPopup(false), 2000);
        } else {
          alert(data.message || "Failed to send message!");
        }
      } else {
        // Try to get error details from response
        const errorText = await res.text(); // Get raw response text
        alert(
          `Failed to send message! Server responded with status: ${
            res.status
          }. Details: ${errorText || "No details provided"}`
        );
      }
    } catch (error) {
      console.log(error);
      alert("Server not responding — Backend Not Running!");
    }
  };

  return (
    <>
      <div className="form-Container my-2">
        {/* heading */}
        <div className="form-heading">
          <img src={contactimg} alt="Contact" />
        </div>

        {/* blob outline shape */}
        <div className="blob-wrapper">
          <div className="blob-outline"></div>
          <div className="blob-content">
            <p className="blob-para">
              We’d love to hear from you! Fill out the form and let us help you
              achieve your goals. Don’t hesitate — your message matters.
            </p>

            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                />
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                  alt="GitHub"
                  className="invert"
                />
              </a>
            </div>
          </div>
        </div>

        {/* form */}
        <form className="formContent" onSubmit={handleSubmit}>
          <div className="row mb-3 align-items-center">
            <label className="labelName col-sm-2 col-form-label col-form-label-sm my-1">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                name="email"
                className="form-control form-control-sm"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3 align-items-center">
            <label className="labelName col-sm-2 col-form-label col-form-label-sm my-1">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3 align-items-center">
            <label className="labelName col-sm-2 col-form-label col-form-label-sm my-1">
              Phone Number:
            </label>
            <div className="col-sm-10">
              <input
                type="tel"
                name="phoneNumber"
                className="form-control form-control-sm"
                placeholder="9876543210"
                value={formData.phoneNumber}
                onChange={handleChange}
                required // Add this
              />
            </div>
          </div>

          <div className="row mb-3 align-items-center">
            <label className="labelName col-sm-2 col-form-label col-form-label-sm my-1">
              Describe Reason :
            </label>
            <div className="col-sm-10">
              <textarea
                name="message"
                className="form-control form-control-sm"
                placeholder="Short Description"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* popup */}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-box">
                <h3>✔ Message Sent Successfully</h3>
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactMe;
