import "react";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hello, Im <span className="highlight">Shubham Sonavale</span></h1>
        <p>
          A passionate <span className="">Web Developer</span> skilled in React.js and modern web technologies.  
          I love to build interactive and responsive websites that provide an amazing user experience.
        </p>
        <a href="./Projects">
          <button className="cta-button">View My Work</button>
        </a>
      </div>

     {/* Image */}
      <div className="home-image">
        <img
          src="\src\assets\MY Image.jpeg"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
    
  );
};

export default Home;
