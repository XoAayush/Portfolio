import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { personalInfo } from '../../data/personalInfo';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact page-section">
      <SectionHeader title="CONTACT" />

      <div className="contact__content">
        <div className="contact__left" data-aos="fade-right">
          <p className="contact__description">
            Available for freelance work and internship opportunities.
            Feel free to reach out — let's build something remarkable together.
          </p>

          <div className="contact__info">
            <div className="contact__info-row">
              <FaEnvelope className="contact__info-icon" />
              <a href={`mailto:${personalInfo.email}`} className="contact__info-text">{personalInfo.email}</a>
            </div>

            <div className="contact__info-row">
              <FaMapMarkerAlt className="contact__info-icon" />
              <span className="contact__info-text">{personalInfo.location}</span>
            </div>
          </div>

          <div className="contact__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact__social-btn">
              <FaGithub size={20} /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-btn">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="contact__right" data-aos="fade-left" data-aos-delay="200">
          {submitted ? (
            <div className="contact__success">
              <FaCheckCircle size={48} />
              <h3>MESSAGE SENT</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  id="contact-name"
                />
                <label htmlFor="contact-name">Name</label>
              </div>
              <div className="contact__field">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  id="contact-email"
                />
                <label htmlFor="contact-email">Email</label>
              </div>
              <div className="contact__field">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  rows="5"
                  id="contact-message"
                />
                <label htmlFor="contact-message">Message</label>
              </div>
              <button type="submit" className="btn-primary contact__submit">
                <FaPaperPlane size={14} /> SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
