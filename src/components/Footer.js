import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="social">
                    <a href="https://www.facebook.com/jesse.rowley.3/"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/jesserowley3dart/"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <div className="social">
                    <a href="https://github.com/JD-Rowley"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;