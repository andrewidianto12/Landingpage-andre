'use client';
import React from 'react';

type Experience = {
    id: number;
    period: string;
    title: string;
    company: string;
    points: string[];
};

const experiences: Experience[] = [
    {
        id: 1,
        period: 'Jun 2024 – Present',
        title: 'Associate IT Project Officer',
        company: 'PT Bank Rakyat Indonesia (BRI)',
        points: [
            'Contribute to the New Delivery System (NDS) project handling frontend, backend, and DevOps responsibilities.',
            'Frontend: Implement micro-frontend concepts and improve website performance from design to deployment.',
            'Backend: Develop nano-services in Golang, define gRPC connections, create protobufs for frontend integration, and implement Redis caching with RabbitMQ as message broker.',
            'DevOps: Add Real User Monitoring (RUM) with Sentry, maintain reliable servers across development, staging, and production, and manage CI/CD pipelines using Bamboo Atlassian.',
        ],
    },
    {
        id: 2,
        period: 'Feb 2024 – Apr 2024',
        title: 'System Engineer (Internship)',
        company: 'PT Bank Rakyat Indonesia (BRI)',
        points: [
            'Integrated Real User Monitoring (RUM) with Sentry for project NDS.',
            'Troubleshooted CI/CD pipelines and environment reliability using Bamboo Atlassian.',
            'Maintained stable environments for development, staging, and production.',
        ],
    },
    {
        id: 3,
        period: 'Aug 2022 – Aug 2023',
        title: 'Staff',
        company: 'PT Sigma Cipta Caraka (TelkomSigma)',
        points: [
            'Created feature plans, installation documentation, and SOPs for applications.',
            'Performed Unit Testing, System Integration Testing, and User Acceptance Testing (UAT).',
            'Developed applications using Java and Node.js.',
            'Conducted knowledge transfer sessions with regional users.',
        ],
    },
    {
        id: 4,
        period: 'Jun 2022 – Jul 2022',
        title: 'Admin Engineering',
        company: 'PT Triple S (Sentra Support Service)',
        points: [
            'Managed and archived technical documentation, reports, and SOPs.',
            'Coordinated meetings between engineering teams and other departments.',
            'Prepared daily, weekly, and monthly reports for management and vendors.',
        ],
    },
    {
        id: 5,
        period: 'Dec 2019 – Jan 2020',
        title: 'Service Quality Assurance (Internship)',
        company: 'PT Telekomunikasi Selular (Telkomsel)',
        points: [
            'Monitored Telkomsel service performance and analyzed network data.',
            'Collected customer feedback and identified areas for service improvement.',
            'Developed web-based tools using JavaScript frameworks and designed system diagrams (DFD, ERD).',
        ],
    },
    {
        id: 6,
        period: 'Aug 2018',
        title: 'Video Operator (Volunteer)',
        company: 'Asian Games (INASGOC)',
        points: [
            'Served as a media partner and photographer for the Beach Volleyball Center.',
            'Supported journalist teams during live event coverage.',
        ],
    },
];

export default function Works() {
    return (
        <section id="works" className="py-20 px-6 sm:px-12 lg:px-24 text-white">
            <div className="max-w-5xl mx-auto">
                {/* ✅ Judul di tengah dan putih */}
                <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    Experience
                </h2>

                <div className="relative border-l border-[#7E57C2]/40 ml-6">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative mb-12 pl-10">
                            {/* Number indicator */}
                            <div className="absolute -left-[1.6rem] top-1 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#7E57C2] text-white font-semibold shadow-md">
                                {index + 1}
                            </div>

                            {/* Card */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
                                <p className="text-xs font-semibold tracking-widest mb-2 text-[#7DD3FC]">
                                    {exp.period}
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold">
                                    {exp.title} ·{' '}
                                    <span className="bg-gradient-to-r from-[#4FC3F7] via-[#7E57C2] to-[#2196F3] bg-clip-text text-transparent font-semibold drop-shadow-[0_0_6px_rgba(79,195,247,0.6)]">
                                        {exp.company}
                                    </span>
                                </h3>

                                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-200 text-sm leading-relaxed">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
