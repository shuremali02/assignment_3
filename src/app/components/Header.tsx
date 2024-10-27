"use client";
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { SiGeeksforgeeks } from "react-icons/si";

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  return (

    <header className="bg-transparent top-0 z-10 sticky w-full shadow-xl text-black  py-3 md:px-11 px-5 flex items-center justify-between">
<div className='md:flex md:gap-x-11 '>
    <h1 className='md:flex space-x-2 hidden '>
    < HiOutlineSearch size={38}/> <Input type='text' placeholder='Search' className='px-3 bg-transparent'/>
    </h1> 

      {/* Logo Section */}
      <Link href="/">
        <div className='flex items-center md:space-x-4 text-black   '>
          <h1 className='text-3xl font-serif flex '>
            
          <SiGeeksforgeeks size={38} className='bg-blue-600 rounded-full md:p-1 md:mr-4 '/> 
          <p className='hidden md:flex'>Greens Group
          </p>
          </h1>
        </div>
      </Link>
      </div>

      {/* Centered Navigation for larger screens */}
      <nav className="hidden md:flex ">
        <ul className='flex space-x-14 text-black'>
          <li><Link className='hover:text-blue-300 hover:underline underline-offset-2' href="#">About</Link></li>
          <li><Link className='hover:text-blue-300 hover:underline underline-offset-2' href="#">Projects</Link></li>
          <li><Link className='hover:text-blue-300 hover:underline underline-offset-2' href="#">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Button aligned to the right */}
      <div className="md:hidden  flex justify-end">
        <button  onClick={() => setOpen(!Open)} aria-label="Toggle Menu">
          {Open ? <FiX size={38} /> : <FiMenu size={38} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {Open && (
        <nav className="absolute top-16 left-0 right-0 bg-white text-black  text-center">
          <ul className="flex flex-col gap-4 py-4">
            <li><Link href="#" className="hover:underline underline-offset-2">Projects</Link></li>
            <li><Link href="#" className="hover:underline underline-offset-2">About</Link></li>
            <li><Link href="#" className="hover:underline underline-offset-2">Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
