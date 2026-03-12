import React from 'react';
import { useTranslation } from 'react-i18next';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const PROJECTS_DATA = [
    {
        id: 1,
        title: "Modern React Portfolio",
        descKey: "portfolio",
        tech: ["React.js", "Vite", "Framer Motion", "i18next"],
        github: "https://github.com/zhanaboty",
        demo: "#",
        featured: true
    },
    {
        id: 2,
        title: "Microservices CI/CD Pipeline",
        descKey: "cicd",
        tech: ["Docker", "Kubernetes", "AWS", "GitLab CI"],
        github: "https://github.com/zhanaboty",
        demo: "#",
        featured: false
    },
    {
        id: 3,
        title: "E-Commerce Frontend",
        descKey: "ecommerce",
        tech: ["React", "Redux", "Tailwind CSS"],
        github: "https://github.com/zhanaboty",
        demo: "#",
        featured: false
    }
];

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {t('projects.title', 'Featured Projects')}
                </motion.h2>

                <div className="projects-grid">
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Tilt
                                className="project-card-tilt"
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                perspective={1000}
                                transitionSpeed={1000}
                                scale={1.02}
                                glareEnable={true}
                                glareMaxOpacity={0.1}
                                glareColor="var(--accent-cyan)"
                                glarePosition="all"
                            >
                                <div className={`project-card ${project.featured ? 'featured' : ''}`}>
                                    <div className="project-content">
                                        <div className="project-header">
                                            <h3 className="project-title">{project.title}</h3>
                                            <div className="project-links">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="interactive"><Github size={20} /></a>
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="interactive"><ExternalLink size={20} /></a>
                                            </div>
                                        </div>

                                        <p className="project-desc">
                                            {t(`projects.items.${project.descKey}`)}
                                        </p>

                                        <div className="project-tech">
                                            {project.tech.map(tech => (
                                                <span key={tech} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
