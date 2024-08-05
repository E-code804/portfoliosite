import React, { useState } from "react";
import "./ContactMe.css";

// Could refactor contact title/subtitles into elements.
// Could enforce filling all parts of form.
const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //http://localhost:5001/send
    const url = "https://portfolio-contact-form-x6k6.onrender.com/send";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    } finally {
      setFormData({
        firstName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="form" id="contact" data-aos="fade-up">
      <div className="form-label-container">
        <h1>Contact Me</h1>

        <p>Let's get in touch!</p>
      </div>

      <div className="form_container">
        <div>
          <div className="contact_information">
            <i className="fa-solid fa-phone"></i>

            <div>
              <h3 className="contact_title">Call Me</h3>

              <span className="contact_subtitle">551-235-2918</span>
            </div>
          </div>
          <div className="contact_information">
            <i className="fa-solid fa-envelope"></i>

            <div>
              <h3 className="contact_title">Email</h3>

              <span className="contact_subtitle">erikpfeffer5@gmail.com</span>
            </div>
          </div>

          <div className="contact_information">
            <i className="fa-solid fa-location-dot"></i>

            <div>
              <h3 className="contact_title">Location</h3>

              <span className="contact_subtitle">Haworth, NJ/College Park, MD</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="message_form">
          <div className="form_content double">
            <div className="form_input">
              <input
                name="firstName"
                className="form-field"
                value={formData.firstName}
                onChange={handleChange}
              />
              <label>Name</label>
            </div>
            <div className="form_input">
              <input
                name="email"
                type="email"
                className="form-field"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="">Email</label>
            </div>
          </div>

          <div className="form_content">
            <div className="form_input">
              <input
                name="subject"
                className="form-field"
                value={formData.subject}
                onChange={handleChange}
              />
              <label>Subject</label>
            </div>
          </div>

          <div className="form_content">
            <div className="form_input">
              <textarea
                id="message"
                name="message"
                rows="10"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label>Message</label>
            </div>
          </div>

          <button className="form_submit" type="submit">
            Send Message <i className="fa-solid fa-paper-plane"></i>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
