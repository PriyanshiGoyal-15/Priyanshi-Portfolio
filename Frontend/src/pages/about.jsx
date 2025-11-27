import React from "react";
import coverPhoto from "../image/coverPhoto.png";
import "./about.css";
import resume from "../resume/PriyanshIGoyal_CV-1.pdf";

const About = () => {
  return (
    <>
      <div className="hero-section">
        {/* Drop Lines */}
        <div className="drops-background">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="drop-line"></span>
          ))}
        </div>

        {/* Hero content */}
        <div className="about-container position-relative text-center">
          <img src={coverPhoto} className="about-image" alt="Cover" />
          <div className="coverText">
            <div className="hero-text">
              <h1>
                Hi, I am <span className="text-info">Priyanshi</span>
              </h1>
              <p className="developer">Frontend Developer</p>
              <p className="lead">
                Results-oriented Frontend Developer with solid hands-on
                experience in building responsive, user-focused web applications
                using React.js, JavaScript. Committed to delivering clean,
                efficient code based on strong UI/UX principles. Focused on
                continuous growth, teamwork, and solving complex problems to
                support project and organizational success.
              </p>
              <div className="btn-wrapper">
                <a
                  href={resume}
                  download="Priyanshi_Goyal_Resume.pdf"
                  className="resume-btn"
                >
                  Resume
                </a>
                <a href="/projects" className="resume-btn">
                  My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Card */}
      <div className="contact-card">
        <h2 className="contact-title">Contact & Location</h2>
        <p className="contact-subtext">Feel free to reach out anytime!</p>

        <div className="contact-info my-3">
          📧 <span>priyanshigoyal@gmail.com</span> <br />
          📍 <span>Jaipur, Rajasthan, India</span>
        </div>

        <div className="map-box">
          <iframe
            title="Jaipur Map"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.598697268105!2d75.78727087511041!3d26.912433576506555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f32d38b2c5%3A0xbbf8e5d9d6c4f9a2!2sJaipur%2C%20Rajasthan!5e0!3m2!1n!2sin!4v1703867200000"
          ></iframe>
        </div>

        <div className="social-row">
          <a
            href="https://www.linkedin.com/in/priyanshi-goyal-397b682a2/"
            target="_blank"
            className="icon-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              width="22"
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://github.com/PriyanshiGoyal-15"
            target="_blank"
            className="icon-btn"
          >
            <img
              src="https://img.icons8.com/?size=100&id=16318&format=png&color=000000"
              width="29"
              alt="Twitter"
            />
          </a>

          <a href="mailto:priyanshi3625@gmail.com" className="hire-btn">
            Hire Me
          </a>
        </div>
      </div>

      {/* footer */}
      <div className="container ">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item ">
              <a href="/" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/Skills" className="nav-link px-2 text-body-secondary">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/Experience"
                className="nav-link px-2 text-body-secondary"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a href="/Projects" className="nav-link px-2 text-body-secondary">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/ContactUs"
                className="nav-link px-2 text-body-secondary"
              >
                Contact Me
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            @ Priyanshi Goyal, Frontend Developer
          </p>
        </footer>
      </div>
    </>
  );
};

export default About;
