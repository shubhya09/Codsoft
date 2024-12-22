import 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <nav className="header">
      <h2>Portfolio</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
