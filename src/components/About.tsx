'use client';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center">
          {/* image column */}
          <div className="flex justify-center md:justify-center md:items-center">
            <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl overflow-hidden border border-white/8 bg-white/4 shadow-lg transform md:translate-y-6">
              <img
                src="/me.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* content column (spans 2 cols on md+) */}
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-10 shadow-sm">
              <p className="text-gray-200 leading-relaxed text-lg">
                Hi — I’m Muhammad Andre Widianto. I build and operate cloud-native systems,
                design CI/CD pipelines, and write reliable backend services (mostly Golang).
                I enjoy automating repetitive tasks, optimizing system reliability, and
                improving developer experience.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm text-gray-300 uppercase tracking-wider">What I do</h3>
                  <ul className="mt-3 text-gray-200 space-y-2">
                    <li>• Cloud infrastructure (AWS / GCP)</li>
                    <li>• CI/CD & automation</li>
                    <li>• Observability & SRE practices</li>
                    <li>• Backend services with Go</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm text-gray-300 uppercase tracking-wider">Tools & Tech</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Golang', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus'].map(t => (
                      <span
                        key={t}
                        className="text-sm bg-white/4 border border-white/6 px-3 py-1 rounded-full text-gray-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="/resume.pdf"
                  className="rounded-md px-4 py-2 bg-white/8 backdrop-blur-sm border border-white/10 text-gray-100 hover:bg-white/12 transition"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="rounded-md px-4 py-2 border border-white/10 text-gray-100 hover:bg-white/6 transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}