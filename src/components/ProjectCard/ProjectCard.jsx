import { FaGithub, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <div className="project-card" data-aos="fade-up" data-aos-delay={delay}>
      <div className="project-card__image">
        <div className="project-card__placeholder">
          <span className="project-card__initials">
            {project.title.split(' ').map(w => w[0]).join('')}
          </span>
        </div>
        <div className="project-card__period-badge">{project.period}</div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__techs">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__tech-pill">{tech}</span>
          ))}
        </div>

        <ul className="project-card__highlights">
          {project.highlights.map((h, i) => (
            <li key={i} className="project-card__highlight">
              <FaChevronRight size={10} color="#FFD700" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="project-card__footer">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card__btn">
            <FaGithub size={16} /> CODE
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__btn">
            <FaExternalLinkAlt size={14} /> LIVE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
