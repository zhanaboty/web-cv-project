import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer-section" id="contact">
            <div className="container">
                <motion.div
                    className="contact-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="title-heavy">{t('contact.heading')}</h2>
                    <p className="contact-desc">
                        {t('contact.desc')}
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:zhanabekmaksot@gmail.com"
                        className="btn-primary"
                    >
                        <Mail size={18} /> {t('contact.button')}
                    </motion.a>
                </motion.div>

                <div className="footer-bottom">
                    <div className="footer-logo">
                        <Terminal size={20} className="logo-icon" />
                        <span className="logo-text">zhanabek.dev</span>
                    </div>

                    <div className="social-links footer-socials">
                        <motion.a whileHover={{ scale: 1.2, y: -5 }} href="https://github.com/zhanaboty" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, y: -5 }} href="https://www.linkedin.com/in/zhanabek-maksotuly-68731821b/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></motion.a>
                    </div>

                    <p className="copyright">
                        © {new Date().getFullYear()} {t('contact.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
