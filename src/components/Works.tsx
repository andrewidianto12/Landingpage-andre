'use client';
import React from 'react';

type Project = {
    title: string;
    description: string;
    tech?: string[];
    demo?: string;
    repo?: string;
};

const works: Project[] = [
    {
        title: 'Cloud Infra Automation',
        description: 'Terraform modules + GitHub Actions to provision infra and CI/CD for microservices.',
        tech: ['Terraform', 'GitHub Actions', 'AWS'],
        repo: '#',
    },
    {
        title: 'Realtime Metrics Collector',
        description: 'High-throughput collector and Prometheus exporter for service metrics.',
        tech: ['Golang', 'Prometheus', 'Kubernetes'],
        repo: '#',
    },
    {
        title: 'Frontend Landing',
        description: 'Fast, animated landing page with starfield and custom cursor.',
        tech: ['Next.js', 'Tailwind', 'Canvas'],
        demo: '#',
        repo: '#',
    },
];

export default function Works() {
    return (
        <section id="works" className="py-20 px-6 sm:px-12 lg:px-24 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">Works</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {works.map((p) => (
                        <article
                            key={p.title}
                            className="relative rounded-xl p-6 bg-white/6 backdrop-blur-md border border-white/8 hover:scale-[1.01] transition-transform shadow-sm"
                        >
                            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                            <p className="text-gray-200 mb-4 leading-relaxed text-sm">{p.description}</p>

                            {p.tech && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs bg-white/4 border border-white/6 px-2 py-1 rounded-full text-gray-100"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="flex items-center gap-3 mt-auto">
                                {p.demo && (
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm rounded-md px-3 py-2 bg-white/8 border border-white/10 hover:bg-white/12 transition"
                                    >
                                        Live
                                    </a>
                                )}
                                {p.repo && (
                                    <a
                                        href={p.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm rounded-md px-3 py-2 border border-white/10 hover:bg-white/6 transition"
                                    >
                                        Repo
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}