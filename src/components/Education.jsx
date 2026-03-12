import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Experience.css';

const EDUCATION_KEYS = [
    { id: 1, key: "edu1" },
    { id: 2, key: "edu2" }
];

const Education = () => {
    const { t } = useTranslation();

    return (
        <section className="section" id="education">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {t('education.title')}
                </motion.h2>

                <div className="timeline">
                    {EDUCATION_KEYS.map((edu, index) => (
                        <motion.div
                            className="timeline-item"
                            key={edu.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="role">{t(`education.items.${edu.key}.degree`)}</h3>
                                    <span className="period">{t(`education.items.${edu.key}.period`)}</span>
                                </div>
                                <h4 className="company">@ {t(`education.items.${edu.key}.university`)}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
