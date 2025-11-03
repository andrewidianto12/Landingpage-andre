import AnimatedName from '../styles/AnimatedName';
import Starfield from '../styles/Starfield';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-start justify-center min-h-screen px-8 text-white"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgb(6 10 25), rgb(14 23 47), rgb(88 60 189))',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Starfield />
      <div className="relative z-10">
        <p className="text-gray-400 mb-2">Hey, I’m</p>
        <AnimatedName name="Muhammad Andre Widianto" />
        <p className="max-w-2xl mt-6 text-gray-300 leading-relaxed">
          I’m a DevOps Engineer specializing in Cloud Infrastructure, CI/CD, and Golang backend. 
          I love creating things that live on the internet — from scalable systems to automation pipelines.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-10">
        <a href="mailto:andrewidianto12@gmail.com" className="border border-gray-600 rounded-md px-5 py-2 hover:border-white">✉️ Email</a>
        <a href="https://www.linkedin.com/in/muhammad-andre-widianto/" className="border border-gray-600 rounded-md px-5 py-2 hover:border-blue-400">in LinkedIn</a>
        <a href="https://github.com/andre" className="border border-gray-600 rounded-md px-5 py-2 hover:border-purple-400">💻 Github</a>
      </div>

    
    </section>
  );
}
