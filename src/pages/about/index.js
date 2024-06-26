import Link from 'next/link';

export default function About() {
  return (
    <div className="flex-grow flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white"> 
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl mb-4">I am a An Artist and Programmer with experience in Web Development and Game Development.</p>
        <p className="text-xl mb-8">I have a background in Visual Arts, HTML, CSS, JavaScript and Unity.</p>
      </div>
    </div>
  );
}
