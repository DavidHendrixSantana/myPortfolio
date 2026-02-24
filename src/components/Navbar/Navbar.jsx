import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/portfolioSlice';
import { Menu, X, Github, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const profile = useSelector(selectProfile);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo" onClick={() => scrollToSection('hero')}>
                    DSMS<span className="dot">.</span>
                </div>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <button onClick={() => scrollToSection('hero')}>Home</button>
                    <button onClick={() => scrollToSection('experience')}>Experience</button>
                    <button onClick={() => scrollToSection('skills')}>Skills</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </div>

                <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
