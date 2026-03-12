import React from 'react';
import { useTranslation } from 'react-i18next';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import './GithubStats.css';

const explicitTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const GithubStats = () => {
    const { t } = useTranslation();

    return (
        <section className="section" id="github-stats">
            <div className="container">
                <motion.div
                    className="stats-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="section-title">
                        <Github className="title-icon" size={28} />
                        GitHub Contributions
                    </h2>
                    <p className="stats-subtitle">Real-time activity from <a href="https://github.com/zhanaboty" target="_blank" rel="noopener noreferrer" className="interactive">@zhanaboty</a></p>
                </motion.div>

                <motion.div
                    className="calendar-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <GitHubCalendar
                        username="zhanaboty"
                        theme={explicitTheme}
                        colorScheme="dark"
                        blockSize={14}
                        blockMargin={5}
                        fontSize={14}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default GithubStats;
