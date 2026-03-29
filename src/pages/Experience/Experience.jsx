import { useState } from 'react';
import { FaClock, FaCaretRight, FaStar, FaGraduationCap, FaCode, FaHandsHelping, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { education } from '../../data/education';
import { activities, certifications } from '../../data/activities';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'EDUCATION' },
    { id: 'activities', label: 'ACTIVITIES' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
  ];

  const getIconComponent = (type) => {
    if (type === 'club') return <FaCode />;
    if (type === 'social') return <FaHandsHelping />;
    return <FaCertificate />;
  };

  return (
    <section className="experience page-section">
      <SectionHeader title="EXPERIENCE" />

      <div className="experience__tabs" data-aos="fade-up">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`experience__tab ${activeTab === tab.id ? 'experience__tab--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="experience__timeline">
        {activeTab === 'education' && education.map((item, i) => (
          <div key={item.id} className="timeline-item" data-aos="fade-right" data-aos-delay={i * 100}>
            <div className="timeline-item__dot">◆</div>
            <div className="timeline-item__card">
              <div className="timeline-item__header">
                <FaGraduationCap className="timeline-item__icon" />
                <h3 className="timeline-item__degree">{item.degree}</h3>
              </div>
              <p className="timeline-item__institution">{item.institution}</p>
              <p className="timeline-item__location">{item.location}</p>
              <div className="timeline-item__meta">
                <span className="timeline-item__period"><FaClock size={12} /> {item.period}</span>
                {item.cgpa && (
                  <span className="timeline-item__badge timeline-item__badge--gold">
                    <FaStar size={10} /> CGPA: {item.cgpa}
                  </span>
                )}
                {item.status === 'ongoing' && (
                  <span className="timeline-item__badge timeline-item__badge--cyan">{item.highlight}</span>
                )}
              </div>
            </div>
          </div>
        ))}

        {activeTab === 'activities' && activities.map((item, i) => (
          <div key={item.id} className="timeline-item" data-aos="fade-right" data-aos-delay={i * 100}>
            <div className="timeline-item__dot">◆</div>
            <div className="timeline-item__card">
              <div className="timeline-item__header">
                {getIconComponent(item.type)}
                <h3 className="timeline-item__degree">{item.role}</h3>
              </div>
              <p className="timeline-item__institution">{item.organization}</p>
              {item.department && <p className="timeline-item__location">{item.department}</p>}
              <div className="timeline-item__meta">
                <span className="timeline-item__period"><FaClock size={12} /> {item.period}</span>
                <span className={`timeline-item__badge ${item.type === 'club' ? 'timeline-item__badge--cyan' : 'timeline-item__badge--gold'}`}>
                  {item.type === 'club' ? 'TECHNICAL' : 'SOCIAL'}
                </span>
              </div>
              <ul className="timeline-item__responsibilities">
                {item.responsibilities.map((r, j) => (
                  <li key={j}><FaCaretRight size={12} color="#FFD700" /> {r}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {activeTab === 'certifications' && certifications.map((item, i) => (
          <div key={item.id} className="timeline-item" data-aos="fade-right" data-aos-delay={i * 100}>
            <div className="timeline-item__dot">◆</div>
            <div className="timeline-item__card">
              <div className="timeline-item__header">
                <FaCertificate className="timeline-item__icon" />
                <h3 className="timeline-item__degree">{item.title}</h3>
              </div>
              <p className="timeline-item__institution">{item.issuer}</p>
              <div className="timeline-item__meta">
                <span className="timeline-item__period"><FaClock size={12} /> {item.date}</span>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="timeline-item__link">
                  <FaExternalLinkAlt size={12} /> View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
