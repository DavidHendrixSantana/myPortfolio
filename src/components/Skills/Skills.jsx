import React from 'react';
import { useSelector } from 'react-redux';
import { selectSkills, selectCertifications } from '../../store/portfolioSlice';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, PenTool, Terminal, Award } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skills = useSelector(selectSkills);
    const certifications = useSelector(selectCertifications);

    const getIcon = (category) => {
        switch (category) {
            case 'languages': return <Code2 size={24} />;
            case 'frameworks': return <Layout size={24} />;
            case 'databases': return <Database size={24} />;
            case 'tools': return <Terminal size={24} />;
            case 'methodologies': return <PenTool size={24} />;
            default: return <Code2 size={24} />;
        }
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Certifications</h2>

                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            className="skill-category"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="category-header">
                                <div className="icon-box">{getIcon(category)}</div>
                                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            </div>
                            <div className="skill-tags">
                                {items.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="certifications-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h3 className="cert-title"><Award size={24} /> Certifications</h3>
                    <div className="cert-grid">
                        {certifications.map((cert, i) => (
                            <div key={i} className="cert-card">
                                {cert}
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
