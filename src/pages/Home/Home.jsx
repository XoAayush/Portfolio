import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';
import './Home.css';

const roles = ['Frontend Developer', 'React Enthusiast', 'MCA Student', 'Problem Solver'];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero">
      <div className="hero__grid-overlay" />
      <div className="hero__glow hero__glow--top" />
      <div className="hero__glow hero__glow--bottom" />
      <div className="scanline-overlay" />

      <div className="hero__status" data-aos="fade-down" data-aos-delay="0">
        &lt;STATUS:ONLINE&gt;
      </div>

      <div className="hero__content">
        <h1 className="hero__name glitch" data-text={personalInfo.name} data-aos="fade-down">
          {personalInfo.name}
        </h1>

        <h2 className="hero__role" data-aos="fade-up" data-aos-delay="200">
          {displayText}<span className="hero__cursor">|</span>
        </h2>

        <span className="hero__location" data-aos="fade-up" data-aos-delay="400">
          <FaMapMarkerAlt size={14} /> {personalInfo.location.split(' 1')[0]}
        </span>

        <div className="hero__cta" data-aos="zoom-in" data-aos-delay="600">
          <Link to="/projects" className="btn-primary">VIEW PROJECTS</Link>
          <a href="#" className="btn-secondary">DOWNLOAD CV</a>
        </div>

        <div className="hero__socials" data-aos="fade-up" data-aos-delay="800">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero__social-icon" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-icon" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hero__social-icon" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <FaChevronDown size={20} />
      </div>
    </section>
  );
};

export default Home;
