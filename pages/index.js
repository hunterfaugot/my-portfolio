import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl">Hello, I'm [Your Name].</p>
      <nav className="mt-8">
        <ul className="flex space-x-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
