import {
  SiJavascript, SiHtml5, SiCss, SiCplusplus, SiMysql, SiPython,
  SiReact, SiVite, SiTailwindcss, SiBootstrap,
  SiGit, SiGithub, SiFirebase
} from 'react-icons/si';
import {
  FaJava, FaGithub, FaLinkedin, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaGraduationCap, FaCode, FaHandsHelping,
  FaCertificate, FaBars, FaTimes, FaChevronDown, FaChevronRight,
  FaExternalLinkAlt, FaClock, FaCaretRight, FaStar, FaBriefcase,
  FaGlobe, FaDownload, FaUserAlt, FaCss3Alt, FaLaptopCode,
  FaMicrosoft, FaPaperPlane, FaCheckCircle
} from 'react-icons/fa';

const iconMap = {
  SiJavascript, SiHtml5, SiCss, SiCplusplus, SiMysql, SiPython,
  SiReact, SiVite, SiTailwindcss, SiBootstrap,
  SiGit, SiGithub, SiFirebase,
  FaJava, FaGithub, FaLinkedin, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaGraduationCap, FaCode, FaHandsHelping,
  FaCertificate, FaBars, FaTimes, FaChevronDown, FaChevronRight,
  FaExternalLinkAlt, FaClock, FaCaretRight, FaStar, FaBriefcase,
  FaGlobe, FaDownload, FaUserAlt, FaCss3Alt, FaLaptopCode,
  FaMicrosoft, FaPaperPlane, FaCheckCircle,
};

export const getIcon = (iconName) => iconMap[iconName] || null;

export const renderIcon = (iconName, color = '#FFD700', size = 36) => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;
  return <IconComponent color={color} size={size} />;
};

export {
  SiJavascript, SiHtml5, SiCss, SiCplusplus, SiMysql, SiPython,
  SiReact, SiVite, SiTailwindcss, SiBootstrap,
  SiGit, SiGithub, SiFirebase,
  FaJava, FaGithub, FaLinkedin, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaGraduationCap, FaCode, FaHandsHelping,
  FaCertificate, FaBars, FaTimes, FaChevronDown, FaChevronRight,
  FaExternalLinkAlt, FaClock, FaCaretRight, FaStar, FaBriefcase,
  FaGlobe, FaDownload, FaUserAlt, FaCss3Alt, FaLaptopCode,
  FaMicrosoft, FaPaperPlane, FaCheckCircle,
};
