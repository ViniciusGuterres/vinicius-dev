'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaCode, FaDatabase, FaServer } from 'react-icons/fa';
import Image from 'next/image';
import { HeroProps, TechStackItem } from '../../types';
import { SOCIAL_LINKS } from '@/app/config/settings';

// Tech stack data
const techStack: TechStackItem[] = [
    { icon: <FaCode className="w-4 h-4" />, name: 'React', category: 'frontend' },
    { icon: <FaCode className="w-4 h-4" />, name: 'TypeScript', category: 'frontend' },
    { icon: <FaCode className="w-4 h-4" />, name: 'Tailwind CSS', category: 'frontend' },
    { icon: <FaServer className="w-4 h-4" />, name: 'Node.js', category: 'backend' },
    { icon: <FaServer className="w-4 h-4" />, name: 'Express.js', category: 'backend' },
    { icon: <FaDatabase className="w-4 h-4" />, name: 'PostgreSQL', category: 'database' },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const floatingVariants = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
    const { github, linkedin } = SOCIAL_LINKS;

    // Handle CTA button clicks
    const handleViewProjects = () => {
        // Smooth scroll to projects section
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    /**
     * @summary Creates and triggers a download of the resume file.
     * @desc Dynamically creates an anchor (`<a>`) element, sets its `href` to the resume file path,
     *       and triggers a programmatic click to initiate the file download. The link element is
     *       temporarily added to and then removed from the document body to work consistently across browsers.
     * @returns {void}
     */
    const handleDownloadResume = () => {
        const link = document.createElement('a');

        link.href = '/vinicius_guterres_CV.pdf';
        link.download = 'Vinicius_Guterres_Resume.pdf';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section
            className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
            role="banner"
            aria-label="Hero section"
        >
            {/* Background with solid dark theme */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    {/* Floating geometric shapes */}
                    <motion.div
                        className="absolute top-20 left-10 w-20 h-20 border border-[#68A063]/15 rounded-full"
                        // variants={floatingVariants}
                        animate="animate"
                    />

                    <motion.div
                        className="absolute top-40 right-20 w-16 h-16 border border-[#68A063]/15 rotate-45"
                        // variants={floatingVariants}
                        animate="animate"
                        transition={{ delay: 1 }}
                    />

                    <motion.div
                        className="absolute bottom-40 left-20 w-12 h-12 border border-[#68A063]/15 rounded-full"
                        // variants={floatingVariants}
                        animate="animate"
                        transition={{ delay: 2 }}
                    />

                    <motion.div
                        className="absolute bottom-20 right-10 w-24 h-24 border border-[#68A063]/15 rotate-12"
                        // variants={floatingVariants}
                        animate="animate"
                        transition={{ delay: 3 }}
                    />

                    {/* Subtle grid pattern */}
                    {/* <div 
                        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg"
                        width="60"
                        height="60" 
                        viewBox="0 0 60 60" 
                        xmlns="http://www.w3.org/2000/svg%3E%3Cg"
                        fill="none" fill-rule="evenodd%3E%3Cg" fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" /> */}
                </div>
            </div>

            {/* Main content container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    className="text-center"
                    // variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Profile Image */}
                    <motion.div
                        className="mb-8 flex justify-center"
                    // variants={itemVariants}
                    >
                        <div className="relative">
                            <motion.div
                                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-[#68A063]/30 shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/profile_img.png"
                                    alt="Vinicius Guterre - Full-Stack Developer"
                                    width={192}
                                    height={192}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </motion.div>
                            {/* Glowing ring effect */}
                            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-[#68A063] to-transparent opacity-20 animate-pulse" />
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
                    // variants={itemVariants}
                    >
                        <span className="text-white underline decoration-[#68A063] decoration-4 underline-offset-8">
                            Full-Stack Developer
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.h2
                        className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 font-medium"
                    // variants={itemVariants}
                    >
                        Building scalable web solutions with{' '}
                        <span className="text-white/80">React</span>,{' '}
                        <span className="text-[#68A063]">Node.js</span>, and{' '}
                        <span className="text-white/80">PostgreSQL</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    // variants={itemVariants}
                    >
                        Passionate about creating efficient, user-friendly applications that solve real-world problems.
                        I combine modern frontend technologies with robust backend solutions to deliver exceptional digital experiences.
                    </motion.p>

                    {/* Tech Stack Preview */}
                    <motion.div
                        className="mb-12"
                    // variants={itemVariants}
                    >
                        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-[#68A063]/40 transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 1 }}
                                >
                                    <span className={`${tech.category === 'frontend' ? 'text-white/80' :
                                        tech.category === 'backend' ? 'text-[#68A063]' :
                                            'text-white/80'
                                        }`}>
                                        {tech.icon}
                                    </span>
                                    <span className="text-white text-sm font-medium">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Call-to-Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    // variants={itemVariants}
                    >
                        {/* Primary CTA - View Projects */}
                        <motion.button
                            onClick={handleViewProjects}
                            className="group relative px-8 py-4 bg-black text-white font-semibold rounded-lg border-2 border-white/20 hover:border-[#68A063] hover:shadow-[0_0_30px_0_rgba(104,160,99,0.25)] transition-all duration-300 overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View my projects"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <FaGithub className="w-5 h-5" />
                                View My Projects
                            </span>
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-[#68A063] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </motion.button>

                        {/* Secondary CTA - Download Resume */}
                        <motion.button
                            className="group px-8 py-4 bg-black border-2 border-white/20 text-white font-semibold rounded-lg hover:border-[#68A063] hover:bg-[#0f0f0f] transition-all duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Download my resume"
                            onClick={handleDownloadResume}
                        >
                            <FaDownload className="w-5 h-5" />
                            Download Resume
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="mt-12 flex justify-center gap-6"
                    // variants={itemVariants}
                    >
                        <motion.a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-[#68A063]/50 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Visit my GitHub profile"
                        >
                            <FaGithub className="w-6 h-6 text-white hover:text-[#68A063] transition-colors duration-300" />
                        </motion.a>

                        <motion.a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-[#68A063]/50 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Visit my LinkedIn profile"
                        >
                            <FaLinkedin className="w-6 h-6 text-white hover:text-[#68A063] transition-colors duration-300" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-white/60 rounded-full mt-2"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;