import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase, FaGlobe } from 'react-icons/fa';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { personalInfo } from '../../data/personalInfo';
import './About.css';

const About = () => {
  const infoChips = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Panchkula, HR' },
    { icon: <FaEnvelope />, label: 'Email', value: personalInfo.email },
    { icon: <FaPhone />, label: 'Phone', value: personalInfo.phone },
    { icon: <FaGraduationCap />, label: 'University', value: 'Chitkara University' },
    { icon: <FaBriefcase />, label: 'Status', value: 'Open to Work' },
    { icon: <FaGlobe />, label: 'Languages', value: 'English / Hindi / Punjabi' },
  ];

  return (
    <section className="about page-section">
      <SectionHeader title="ABOUT ME" />

      <div className="about__content">
        <div className="about__left" data-aos="fade-right">
          <div className="about__avatar">
            <div className="about__avatar-inner">
              <img src="/aayush.png" alt="Aayush Sharma" className="about__avatar-img" />
            </div>
          </div>
          <div className="about__stats">
            <span className="about__stat-badge">BCA CGPA: 8.32</span>
            <span className="about__stat-badge">MCA: Ongoing</span>
            <span className="about__stat-badge">Chitkara Univ</span>
          </div>
        </div>

        <div className="about__right" data-aos="fade-left" data-aos-delay="200">
          <p className="about__bio">
            I'm Aayush Sharma, a passionate frontend developer and MCA student based in Panchkula, Haryana.
            With a strong foundation in web technologies, I build clean, responsive, and user-centric digital experiences.
          </p>
          <p className="about__bio">
            Currently pursuing my Master of Computer Applications at Amity University after completing my BCA
            with a CGPA of 8.32. I focus on React-based development and am constantly expanding my skill set.
          </p>
          <p className="about__bio">
            When I'm not coding, I'm actively involved in the Matrix Club's technical events and NSS community
            service programs. I believe in continuous learning and collaborative problem-solving.
          </p>
        </div>
      </div>

      <div className="about__info-grid">
        {infoChips.map((chip, i) => (
          <div key={i} className="about__chip" data-aos="zoom-in" data-aos-delay={i * 100}>
            <span className="about__chip-icon">{chip.icon}</span>
            <div className="about__chip-text">
              <span className="about__chip-label">{chip.label}</span>
              <span className="about__chip-value">{chip.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
