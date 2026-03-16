import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#1F1B1A] flex justify-center px-6 font-poppins">
      <div className='grid py-12 gap-10 md:grid-cols-12 w-screen'>
        <div className="col-span-1"></div>
        <div className="col-span-3 grid grid-cols-12">
          <div className="col-span-1 mx-auto">
            <Menu className="w-6 h-6 " />
          </div>
        </div>
        <div className="col-span-4 mx-auto">
          <h1 className='text-2xl font-thin text-orange-500'><span className='text-black font-bold'>0x</span>Bolaji</h1>
        </div>
        <div className="col-span-4 justify-end flex gap-4">
          <Link href="https://dribbble.com/0xBolaji">
            Dribbble
          </Link>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="col-span-5">
          <h6 className='text-gray-500'>&lt;html&gt;</h6>
          <h6 className='text-gray-500 ms-5'>&lt;body&gt;</h6>
          <h6 className='text-gray-500 ms-5'>&lt;h1&gt;</h6>
          <h1 className='text-xl ms-16 relative before:content-[""] before:absolute before:-left-7 before:top-[50%] before:w-[20px] before:h-[2px] before:bg-white before:-translate-y-1/2'>Hello</h1>
          <h1 className='text-6xl ms-8'>I'm Bolaji</h1>
          <h1 className='text-6xl ms-8'>Web developer <span className='text-gray-500 text-sm'>&lt;h1&gt;</span></h1>
          <h6 className='text-gray-500 ms-5'>&lt;p&gt;</h6>
          <h3 className='text-2xl ms-8'>frontend developer</h3>
          <h6 className='text-gray-500 ms-5'>&lt;/p&gt;</h6>
          <button className='bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 transition-colors duration-300 mt-5'>
            View Projects
          </button>
        </div>
        <div className="col-span-5">

        </div>
      </div>
    </section>
  );
}