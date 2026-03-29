import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__brand">&lt; AAYUSH SHARMA — {new Date().getFullYear()} /&gt;</p>
        <p className="footer__tech">Built with React + AOS</p>
      </div>
    </footer>
  );
};

export default Footer;
