import React, { useState, useRef, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import MatrixRain from './MatrixRain';
import './Hero.css';

const Hero = () => {
    const { t, i18n } = useTranslation();

    // Terminal State
    const [history, setHistory] = useState([
        { type: 'command', text: 'whoami' },
        { type: 'output', text: 'frontend-devops-engineer' }
    ]);
    const [input, setInput] = useState('');
    const [isMatrixActive, setIsMatrixActive] = useState(false);
    const endOfTerminalRef = useRef(null);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const cmd = input.trim().toLowerCase();
            let newOutput = [];

            if (cmd === 'help') {
                newOutput = [
                    { type: 'output', text: 'Available commands:' },
                    { type: 'output', text: '  whoami      - display current user role' },
                    { type: 'output', text: '  skills      - list primary tech stack' },
                    { type: 'output', text: '  download-cv - download resume in current language' },
                    { type: 'output', text: '  clear       - clear total terminal' },
                    { type: 'output', text: '  matrix      - enter the matrix' }
                ];
            } else if (cmd === 'whoami') {
                newOutput = [{ type: 'output', text: 'zhanabek-maksotuly' }];
            } else if (cmd === 'skills') {
                newOutput = [
                    { type: 'output', text: '[' },
                    { type: 'output', text: '  "React", "TypeScript", "Vite",' },
                    { type: 'output', text: '  "Docker", "Kubernetes", "AWS"' },
                    { type: 'output', text: ']' }
                ];
            } else if (cmd === 'clear') {
                setHistory([]);
                setInput('');
                return;
            } else if (cmd === 'matrix') {
                setIsMatrixActive(true);
                newOutput = [{ type: 'output', text: 'Wake up, Neo...' }];
            } else if (cmd === 'download-cv') {
                newOutput = [{ type: 'output', text: `Downloading Zhanabek_CV_${i18n.language.toUpperCase()}.pdf...` }];
                // Fake download trigger
                setTimeout(() => {
                    const link = document.createElement('a');
                    link.href = `/Zhanabek_CV_${i18n.language.toUpperCase()}.pdf`;
                    link.download = `Zhanabek_CV_${i18n.language.toUpperCase()}.pdf`;
                    link.click();
                }, 500);
            } else if (cmd !== '') {
                newOutput = [{ type: 'output', text: `command not found: ${cmd}. Type 'help' for available commands.` }];
            }

            setHistory(prev => [...prev, { type: 'command', text: input }, ...newOutput]);
            setInput('');
        }
    };

    // Global matrix konami code
    useEffect(() => {
        let keyBuffer = '';
        const konami = 'matrix';
        const handleKeyDown = (e) => {
            keyBuffer += e.key.toLowerCase();
            if (keyBuffer.length > konami.length) {
                keyBuffer = keyBuffer.slice(1);
            }
            if (keyBuffer === konami && !isMatrixActive) {
                setIsMatrixActive(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMatrixActive]);

    // Keep terminal scrolled to bottom
    useEffect(() => {
        endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <section className="hero-section">
            <MatrixRain isActive={isMatrixActive} />
            <div className="container hero-container">

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="status-badge">
                        <span className="pulse"></span> {t('hero.status')}
                    </div>

                    <h1 className="hero-title">
                        <span className="greeting">{t('hero.greeting')}</span>
                        <br />
                        <span className="name">{t('hero.name')}</span>
                    </h1>

                    <h2 className="hero-role">
                        <Terminal size={24} className="role-icon" />
                        <span dangerouslySetInnerHTML={{ __html: t('hero.role') }} />
                    </h2>

                    <p className="hero-description">
                        <Trans i18nKey="hero.desc">
                            I bridge the gap between building beautiful, interactive user interfaces and deploying highly available, scalable infrastructure. Passionate about <span className="code-span">React.js</span>, <span className="code-span">CI/CD</span> pipelines, and cloud architecture.
                        </Trans>
                    </p>

                    <div className="hero-actions">
                        <a href={`/Zhanabek_CV_${i18n.language.toUpperCase()}.pdf`} download className="btn-primary interactive">
                            <Mail size={18} /> {t('hero.cvBtn', 'Download CV')}
                        </a>
                        <div className="social-links">
                            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://github.com/zhanaboty" target="_blank" rel="noopener noreferrer" className="social-icon interactive"><Github size={24} /></motion.a>
                            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/zhanabek-maksotuly-68731821b/" target="_blank" rel="noopener noreferrer" className="social-icon interactive"><Linkedin size={24} /></motion.a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual interactive"
                    initial={{ opacity: 0, filter: 'blur(10px)', x: 50 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="code-window">
                        <div className="window-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="title">zhanabek@dev:~</span>
                        </div>
                        <div className="window-body interactive-terminal" onClick={() => document.getElementById('term-input').focus()}>
                            {history.map((line, index) => (
                                <p key={index} className={line.type === 'output' ? 'output indent' : ''}>
                                    {line.type === 'command' && <span className="prompt">$ </span>}
                                    {line.text}
                                </p>
                            ))}
                            <div className="input-line">
                                <span className="prompt">$ </span>
                                <input
                                    id="term-input"
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleCommand}
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                />
                            </div>
                            <div ref={endOfTerminalRef} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
