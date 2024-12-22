import "react";
import "./styles.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* About Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a passionate <span className="highlight">Web Developer</span> with expertise in 
            <span className="highlight"> React.js</span> and modern front-end technologies. I enjoy 
            creating interactive, responsive, and user-friendly web applications.
          </p>
          <p>
            My goal is to deliver clean and efficient code that enhances user 
            experience. I am constantly learning and exploring new technologies 
            to stay updated in this dynamic tech world.
          </p>

          {/* Skills or Highlights */}
          <div className="skills">
            <div className="skill">
              <h3>HTML & CSS</h3>
              <div className="skill-bar">
                <div className="skill-progress html-css"></div>
              </div>
            </div>
            <div className="skill">
              <h3>JavaScript</h3>
              <div className="skill-bar">
                <div className="skill-progress js"></div>
              </div>
            </div>
            <div className="skill">
              <h3>React.js</h3>
              <div className="skill-bar">
                <div className="skill-progress react"></div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
