import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4">
      <h1 className="text-5xl font-bold mb-4">About Me</h1>
      <p className="text-xl mb-4">I am a An Artist and Programmer with experience in Web Development and Game Development.</p>
      <p className="text-xl mb-8">I have a background in Visual Arts, HTML, CSS, JavaScript and Unity.</p>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-blue-500 hover:underline">Home</Link></li>
          <li><Link href="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
          <li><Link href="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
