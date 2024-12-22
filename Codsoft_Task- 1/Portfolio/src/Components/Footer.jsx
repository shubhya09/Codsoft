import  "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p className="footer-text">© 2024 My Portfolio. All rights reserved.</p>
        </div>

        <div className="footer-socials">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="mailto:yourname@example.com" className="social-icon">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
