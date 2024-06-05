import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-4 text-xl">Get in touch with me...</p>
      <nav className="mt-8">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
}
