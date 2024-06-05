import Link from 'next/link';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    link: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3.',
    link: 'https://github.com/yourusername/project3',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4">
      <h1 className="text-5xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
      <nav className="mt-8">
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-blue-500 hover:underline">Home</Link></li>
          <li><Link href="/about" className="text-blue-500 hover:underline">About</Link></li>
          <li><Link href="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
