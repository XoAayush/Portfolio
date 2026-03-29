import './SectionHeader.css';

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header-wrapper" data-aos="fade-right">
      <h2 className="section-header">{title}</h2>
    </div>
  );
};

export default SectionHeader;
