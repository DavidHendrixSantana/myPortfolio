import React from 'react';
import { useSelector } from 'react-redux';
import { selectExperience } from '../../store/portfolioSlice';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = useSelector(selectExperience);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <motion.div
                    className="experience-list"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {experiences.map((exp) => (
                        <motion.div key={exp.id} className="experience-card" variants={itemVariants}>
                            <div className="experience-header">
                                <h3>{exp.role}</h3>
                                <div className="company-info">
                                    <span className="company"><Briefcase size={16} /> {exp.company}</span>
                                    <span className="period"><Calendar size={16} /> {exp.period}</span>
                                </div>
                            </div>
                            <p className="experience-desc">{exp.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
