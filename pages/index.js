import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-2xl mb-8">Hello, I'm [Your Name].</p>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/about" className="text-blue-500 hover:underline">About</Link></li>
          <li><Link href="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
          <li><Link href="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
