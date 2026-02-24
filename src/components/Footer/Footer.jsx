import React from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/portfolioSlice';
import { Github, Linkedin, Mail } from 'lucide-react'; // Assuming Linkedin icon exists or substitute
import './Footer.css';

const Footer = () => {
    const profile = useSelector(selectProfile);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <h3>{profile.name}</h3>
                    <p>Building digital experiences with passion and precision.</p>
                </div>
                <div className="footer-right">
                    <div className="social-links">
                        {profile.contact.github && (
                            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                        )}
                        <a href={`mailto:${profile.contact.email}`}>
                            <Mail size={20} />
                        </a>
                    </div>
                    <p>&copy; {currentYear} Use it nicely.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
