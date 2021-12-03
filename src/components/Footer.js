import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="social">
                    <a href="https://www.facebook.com/jesse.rowley.3/"><FaFacebook /></a>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/jesserowley3dart/"><FaLinkedin /></a>
                </div>
                <div className="social">
                    <a href="https://github.com/JD-Rowley"><FaGithub /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;