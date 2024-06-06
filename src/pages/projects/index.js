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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-4">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
