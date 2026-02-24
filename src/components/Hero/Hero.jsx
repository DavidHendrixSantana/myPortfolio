import React from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/portfolioSlice';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const profile = useSelector(selectProfile);

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">{profile.name}</h1>
                    <h2 className="title">{profile.title}</h2>
                    <p className="intro">{profile.introduction.split('.')[0]}.</p>

                    <div className="cta-container">
                        <button className="primary-btn" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
                            View Work <ArrowRight size={18} />
                        </button>
                        <button className="secondary-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="code-block">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="code-content">
                            <p><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</p>
                            <p>&nbsp;&nbsp;name: <span className="string">"{profile.name}"</span>,</p>
                            <p>&nbsp;&nbsp;role: <span className="string">"{profile.title}"</span>,</p>
                            <p>&nbsp;&nbsp;skills: [<span className="string">"React"</span>, <span className="string">"Redux"</span>, <span className="string">"Python"</span>],</p>
                            <p>&nbsp;&nbsp;hardWorker: <span className="boolean">true</span></p>
                            <p>&#125;;</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
