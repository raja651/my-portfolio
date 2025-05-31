import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} - {new Date().getFullYear() + 1}
        All rights reserved.
      </p>
      <div className="footer-links">
        <FaLinkedin />
        <FaGithub />
        <FaFacebook />
      </div>
    </footer>
  );
}
