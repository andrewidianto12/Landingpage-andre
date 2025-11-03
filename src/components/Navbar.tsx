export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-purple-500">
      <h1 className="text-xl font-semibold">MAW.</h1>
      <ul className="flex space-x-8 text-gray-300">
        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
        <li><a href="#resume" className="hover:text-purple-400">Resume</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
      </ul>
    </nav>
  );
}
