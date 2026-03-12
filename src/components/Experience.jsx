import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Experience.css';

const EXPERIENCES_KEYS = [
    { id: 1, key: "exp1", tech: ["Linux", "Docker", "Kubernetes", "Ansible", "CI/CD"] },
    { id: 2, key: "exp2", tech: ["GitLab CI", "Docker", "Linux", "Bash"] },
    { id: 3, key: "exp3", tech: ["React", "Angular JS", "JavaScript", "Cypress JS", "PostgreSQL"] }
];

const Experience = () => {
    const { t } = useTranslation();

    return (
        <section className="section" id="experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {t('experience.title')}
                </motion.h2>

                <div className="timeline">
                    {EXPERIENCES_KEYS.map((exp, index) => (
                        <motion.div
                            className="timeline-item"
                            key={exp.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="role">{t(`experience.jobs.${exp.key}.role`)}</h3>
                                    <span className="period">{t(`experience.jobs.${exp.key}.period`)}</span>
                                </div>
                                <h4 className="company">@ {t(`experience.jobs.${exp.key}.company`)}</h4>
                                <p className="description">{t(`experience.jobs.${exp.key}.desc`)}</p>
                                <div className="tech-stack">
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
