'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { SectionProps, TechStackItem as TechStackItemType } from '../../types';

// Tech stack data with official icons and colors
const techStack: TechStackItemType[] = [
    // Frontend Technologies
    { icon: '⚛️', name: 'React', category: 'frontend' },
    { icon: '▲', name: 'Next.js', category: 'frontend' },
    { icon: '📘', name: 'TypeScript', category: 'frontend' },
    { icon: '🎨', name: 'Tailwind CSS', category: 'frontend' },

    // Backend Technologies
    { icon: '🟢', name: 'Node.js', category: 'backend' },
    { icon: '⚡', name: 'Express.js', category: 'backend' },

    // Databases
    { icon: '🐘', name: 'PostgreSQL', category: 'database' },
    { icon: '🍃', name: 'MongoDB', category: 'database' },
    { icon: '🔴', name: 'Redis', category: 'database' },
    { icon: '🐬', name: 'MySQL', category: 'database' },

    // Tools & Others
    { icon: '☁️', name: 'AWS', category: 'tools' },
    { icon: '📝', name: 'Git', category: 'tools' },
    { icon: '🐧', name: 'Linux', category: 'tools' },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const techStackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
    },
};

// Tech Stack Item Component
interface TechStackItemProps {
    tech: TechStackItemType;
    index: number;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ tech, index }) => {
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'frontend':
                return 'text-white/80 border-white/20 hover:border-blue-400/50';
            case 'backend':
                return 'text-[#68A063] border-white/20 hover:border-[#68A063]/50';
            case 'database':
                return 'text-white/80 border-white/20 hover:border-purple-400/50';
            case 'tools':
                return 'text-white/80 border-white/20 hover:border-orange-400/50';
            default:
                return 'text-white/80 border-white/20 hover:border-gray-400/50';
        }
    };

    return (
        <motion.div
            className={`group relative p-4 bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 cursor-pointer ${getCategoryColor(tech.category)}`}
            variants={techStackVariants}
            whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05 }}
            aria-label={`${tech.name} technology`}
        >
            {/* Icon */}
            <div className="text-3xl mb-2 flex justify-center">
                {tech.icon}
            </div>

            {/* Technology Name */}
            <div className="text-sm font-medium text-center text-white/90">
                {tech.name}
            </div>

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {tech.name}
            </div>
        </motion.div>
    );
};

const About: React.FC<SectionProps> = ({ className = '', id = 'about' }) => {
    return (
        <section
            id={id}
            className={`relative py-20 overflow-hidden ${className}`}
            role="region"
            aria-label="About section"
        >
            {/* Background with solid dark theme */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
                {/* Subtle background elements */}
                <div className="absolute inset-0">
                    {/* Floating geometric shapes */}
                    <motion.div
                        className="absolute top-20 left-10 w-16 h-16 border border-[#68A063]/10 rounded-full"
                        animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    <motion.div
                        className="absolute top-40 right-20 w-12 h-12 border border-[#68A063]/10 rotate-45"
                        animate={{
                            y: [10, -10, 10],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 2,
                        }}
                    />

                    <motion.div
                        className="absolute bottom-40 left-20 w-8 h-8 border border-[#68A063]/10 rounded-full"
                        animate={{
                            y: [-8, 8, -8],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1,
                        }}
                    />
                </div>
            </div>

            {/* Main content container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Left Column - About Content */}
                    <motion.div
                        className="space-y-8"
                        variants={itemVariants}
                    >
                        {/* Section Title */}
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                            variants={itemVariants}
                        >
                            <span className="text-white underline decoration-[#68A063] decoration-4 underline-offset-8">
                                About Me
                            </span>
                        </motion.h2>

                        {/* About Text */}
                        <motion.div
                            className="space-y-6 text-lg text-gray-300 leading-relaxed"
                            variants={itemVariants}
                        >
                            <p>
                                I'm a passionate full-stack developer with over 4+ years of experience building
                                scalable web applications that solve real-world problems. My journey in software
                                development began with a fascination for turning complex ideas into elegant,
                                user-friendly solutions.
                            </p>

                            <p>
                                What drives me most is the challenge of creating seamless user experiences while
                                maintaining robust, efficient code. I believe in the power of clean architecture
                                and continuous learning, always staying up-to-date with the latest technologies
                                and best practices in the industry.
                            </p>

                            <p>
                                When I'm not coding, you'll find me collaborating with teams, mentoring junior
                                developers, or exploring new frameworks. I'm passionate about open-source
                                contributions and believe in the importance of giving back to the developer
                                community that has shaped my career.
                            </p>
                        </motion.div>

                        {/* Tech Stack Section */}
                        <motion.div
                            className="space-y-6"
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-semibold text-white">
                                Technologies I Work With
                            </h3>

                            {/* Tech Stack Grid */}
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                                variants={containerVariants}
                            >
                                {techStack.map((tech, index) => (
                                    <TechStackItem
                                        key={tech.name}
                                        tech={tech}
                                        index={index}
                                    />
                                ))}
                            </motion.div>

                            {/* Tech Stack Categories */}
                            <motion.div
                                className="flex flex-wrap gap-4 text-sm"
                                variants={itemVariants}
                            >
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-white/80">Frontend</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                    <div className="w-2 h-2 bg-[#68A063] rounded-full"></div>
                                    <span className="text-white/80">Backend</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span className="text-white/80">Database</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                    <span className="text-white/80">Tools</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Pixel Art Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            <motion.div
                                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[600px] rounded-2xl overflow-hidden border-4 border-[#68A063]/30 shadow-2xl bg-gradient-to-br from-[#68A063]/10 to-transparent"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 25px 50px rgba(104,160,99,0.3)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Placeholder for pixel art */}
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                                    <div className="text-center">
                                        <Image
                                            src="/profile_img_pixel_art.png"
                                            alt="Vinicius Guterre - Full-Stack Developer"
                                            width={400}
                                            height={600}
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Glowing ring effect */}
                            <div className="absolute inset-0 rounded-2xl border-4 border-transparent bg-gradient-to-r from-[#68A063]/20 to-transparent opacity-30 animate-pulse" />

                            {/* Floating accent elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-8 h-8 bg-[#68A063]/20 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#68A063]/20 rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1,
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

