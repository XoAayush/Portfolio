import { renderIcon } from '../../utils/iconMap';
import './TechCard.css';

const TechCard = ({ name, icon, color, library, delay = 0 }) => {
  return (
    <div className="tech-card" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="tech-card__icon">
        {renderIcon(icon, color, 36)}
      </div>
      <span className="tech-card__name">{name}</span>
    </div>
  );
};

export default TechCard;
