import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 dark:bg-red-700 text-white p-4 flex justify-between items-center">
        <nav className="container mx-auto flex justify-center space-x-6">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 bg-gray-800 dark:bg-gray-500 rounded-full focus:outline-none"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="flex-grow container mx-auto p-4 flex flex-col justify-center">
        {children}
      </main>
      <footer className="bg-blue-500 dark:bg-red-700 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
