import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects page-section">
      <SectionHeader title="PROJECTS" />
      <div className="projects__grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 150} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
