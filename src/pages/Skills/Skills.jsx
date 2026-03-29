import SectionHeader from '../../components/SectionHeader/SectionHeader';
import TechCard from '../../components/TechCard/TechCard';
import { techStack } from '../../data/techStack';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills page-section">
      <SectionHeader title="SKILLS" />

      <div className="skills__section">
        <h3 className="skills__label" data-aos="fade-right">// LANGUAGES</h3>
        <div className="skills__grid">
          {techStack.languages.map((tech, i) => (
            <TechCard key={tech.name} {...tech} delay={i * 50} />
          ))}
        </div>
      </div>

      <div className="skills__section">
        <h3 className="skills__label" data-aos="fade-right">// FRONTEND</h3>
        <div className="skills__grid">
          {techStack.frontend.map((tech, i) => (
            <TechCard key={tech.name} {...tech} delay={i * 50} />
          ))}
        </div>
      </div>

      <div className="skills__section">
        <h3 className="skills__label" data-aos="fade-right">// TOOLS</h3>
        <div className="skills__grid">
          {techStack.tools.map((tech, i) => (
            <TechCard key={tech.name} {...tech} delay={i * 50} />
          ))}
        </div>
      </div>

      <div className="skills__section">
        <h3 className="skills__label" data-aos="fade-right">// SOFT SKILLS</h3>
        <div className="skills__pills" data-aos="fade-up">
          {techStack.softSkills.map((skill) => (
            <span key={skill} className="skills__pill">{skill}</span>
          ))}
        </div>
      </div>

      <div className="skills__section">
        <h3 className="skills__label" data-aos="fade-right">// LANGUAGES SPOKEN</h3>
        <div className="skills__pills" data-aos="fade-up">
          {techStack.languages_spoken.map((lang) => (
            <span key={lang} className="skills__pill skills__pill--lang">{lang}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
