import { Menu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl ms-auto grid md:grid-cols-12 gap-10 items-center">
        <div className="flex justify-between col-span-1 flex-col items-center">
          <div>
            <Menu />
          </div>  
          <div>
            <p>Scroll down</p>
          </div>
        </div>
        <div className="col-span-6">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Bolaji</span>
          </h1>

          <h2 className="text-xl text-gray-400 mb-6">
            Full-Stack Developer crafting modern web experiences.
          </h2>

          <p className="text-gray-500 mb-8">
            I build fast, scalable applications using modern technologies like
            React, Next.js, and TypeScript.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 rounded-lg">
              View Projects
            </button>

            <button className="px-6 py-3 border border-gray-500 rounded-lg">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center col-span-5">
          <div className="w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
        </div>

      </div>
    </section>
  );
}