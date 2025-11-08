'use client';
import React from 'react';
import {
    SiGoland,
    SiDocker,
    SiKubernetes,
    SiJenkins,
    SiTailwindcss,
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiRabbitmq,
    SiLinux,
    SiAmazon,
    SiGit
} from 'react-icons/si';
import { FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa';

const tools = [
    { name: 'Golang', icon: <SiGoland className="text-sky-400" /> },
    { name: 'Vue.js', icon: <FaVuejs className="text-green-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Docker', icon: <SiDocker className="text-sky-500" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-500" /> },
    { name: 'Jenkins', icon: <SiJenkins className="text-red-400" /> },
    { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
    { name: 'RabbitMQ', icon: <SiRabbitmq className="text-orange-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'Linux', icon: <SiLinux className="text-yellow-400" /> },
    { name: 'AWS', icon: <SiAmazon className="text-orange-400" /> },
    { name: 'Git', icon: <SiGit className="text-orange-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
];

export default function TechMarquee() {
    return (
        <section className="relative py-16 border-t border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden group">
            {/* Title */}
            <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-white">
                Tools & Technologies
            </h2>

            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-marquee space-x-10 whitespace-nowrap text-gray-200 text-lg font-medium group-hover:[animation-play-state:paused]">
                    {tools.concat(tools).map((tool, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:bg-white/20 transition"
                        >
                            <span className="text-xl">{tool.icon}</span>
                            {tool.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
