import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import './Skills.css';

const FRONTEND_SKILLS = [
    'JavaScript', 'TypeScript', 'React.js', 'Angular JS', 'HTML5 & CSS3', 'Tailwind CSS', 'Redux', 'Cypress JS'
];

const DEVOPS_SKILLS = [
    'Linux', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Ansible', 'Git', 'AWS / Cloud', 'Nginx', 'PostgreSQL'
];

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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section className="section" id="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {t('skills.title')}
                </motion.h2>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Frontend Column */}
                    <motion.div variants={itemVariants} className="skill-card frontend-card">
                        <div className="card-header">
                            <div className="icon-wrapper frontend-icon">
                                <Layout size={32} />
                            </div>
                            <h3>{t('skills.frontend')}</h3>
                        </div>
                        <p className="card-desc">{t('skills.frontendDesc')}</p>
                        <div className="skill-tags">
                            {FRONTEND_SKILLS.map((skill, index) => (
                                <span key={index} className="tag">{skill}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* DevOps Column */}
                    <motion.div variants={itemVariants} className="skill-card devops-card">
                        <div className="card-header">
                            <div className="icon-wrapper devops-icon">
                                <Server size={32} />
                            </div>
                            <h3>{t('skills.devops')}</h3>
                        </div>
                        <p className="card-desc">{t('skills.devopsDesc')}</p>
                        <div className="skill-tags">
                            {DEVOPS_SKILLS.map((skill, index) => (
                                <span key={index} className="tag">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
