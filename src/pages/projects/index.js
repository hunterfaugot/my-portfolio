import Link from 'next/link';

const projects = [
  {
    title: 'Robot Assembly Clicker',
    description: 'A simple clicker game running on javascript. Craft computer chips to build robots that then automate the process.',
    link: 'https://github.com/hunterfaugot/capstone-mod1',
  },
  {
    title: 'Random B-Movie Generator',
    description: 'A site that generates a random B-Movie each time you press the button. Use to help you find a movie to watch or just learn about a hidden gem.',
    link: 'https://github.com/hunterfaugot/capstone-mod2',
  },
  {
    title: 'Library Project',
    description: 'This is a library program using node.js that allows you to borrow and return books.',
    link: 'https://github.com/hunterfaugot/jun1-library',
  },
];

export default function Projects() {
  return (
    <div className="flex-grow flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white"> 
      <div className="flex flex-col justify-center items-center py-20">
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
