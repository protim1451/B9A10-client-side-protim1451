import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='mt-6'>
      <div className="footer-container">
        <p>
          <span>VoyageVista</span> © 2024. All rights reserved.
        </p>
        <p>
          For inquiries, please contact us at <a href="mailto:info@voyagevista.com">info@voyagevista.com</a> or +1 (555) 123-4567.
        </p>
        <div className="social-icons">
          <a href="#"><FaFacebookSquare /></a>
          <a href="#"><FaTwitterSquare /></a>
          <a href="#"><FaInstagramSquare /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
