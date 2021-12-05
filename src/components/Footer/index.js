import React from 'react';
import './index.css';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <a href="https://www.facebook.com/jesse.rowley.3/" className="fa-icon" ><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/jesserowley3dart/" className="fa-icon" ><FaLinkedin /></a>
                <a href="https://github.com/JD-Rowley" className="fa-icon" ><FaGithub /></a>
            </div>
        </footer>
    );
}

export default Footer;