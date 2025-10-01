'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../config/settings';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
    const { github, linkedin, email } = SOCIAL_LINKS;
    const { translate } = useLanguage();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                aria-label="Global navigation"
            >
                {/* Logo/Brand */}
                <motion.div
                    className="text-xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Vinícius
                    </span>
                </motion.div>

                {/* Navigation Links */}
                <motion.div
                    className="hidden md:flex items-center space-x-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* home  */}
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">
                        {translate('header.home')}
                    </a>

                    {/*  about */}
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                        {translate('header.about')}
                    </a>

                    {/* projects */}
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                        {translate('header.projects')}
                    </a>    

                    {/* contact */}
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                        {translate('header.contact')}
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="GitHub profile"
                    >
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn profile"
                    >
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="Send email"
                    >
                        <FaEnvelope className="w-5 h-5" />
                    </a>

                    <LanguageToggle />
                </motion.div>
            </nav>
        </header>
    );
}