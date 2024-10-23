import React from 'react';
import Link from 'next/link';

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-blue-700 py-8 text-text2">
      {/* Footer container with background color, padding, and text color */}

     <div className='max-w-7xl mx-auto px-4 lg:px-8 space-y-6'>
       {/* Main content container with responsive padding and spacing */}

         <div className='bg-blue-900 py-6 px-10 text-blue-white font-medium border-y-2 border-opacity-5 border-neutral-400'>
           {/* Top section with background color, padding, text color, and border */}

           <div className='text-center'>
             {/* Centered text section */}

             <div className="text-lg">
               {/* Text section with large font size */}

               <p className="hidden md:block text-white">
                 {/* Email contact for larger screens */}
                 Interested in connecting? Send me a message at: {" "}
               <button className="bg-white text-black py-3 px-7 rounded-md">
                 📧 greensgroups41@gmail.com 
                 </button>
               </p>
             <button className="bg-black text-blue-300 py-3 px-7 rounded-md md:hidden">
                 {/* Email contact for smaller screens */}
                 GreensGroups41@gmail.com
               </button>
             </div>
         </div>
         </div>

         <div className="text-white text-md grid grid-cols-1 md:grid-cols-3 lg:flex lg:justify-center lg:space-x-6">
          {/* Navigation links with responsive grid and flex layout */}

           <Link href="#" className="hover:scale-95 text-center">
           About
          </Link>
          <Link href="#" className="hover:scale-95 text-center">
             Projects
         </Link>
          <Link href="#" className="hover:scale-95 text-center">
             ContactUs
           </Link>
         </div>

         <div className="flex justify-center">
           {/* Centered profile image */}

           <SiGeeksforgeeks size={44} className='bg-white rounded-full p-1'/>
         </div>

         <div className="flex justify-center space-x-6 text-2xl lg:text-3xl">
           {/* Social media icons container with spacing and responsive size */}

           <Link
             href="//linkedin.com/in/syed-shurem-ali-5a55852a0"
             aria-label="LinkedIn"
             className="text-white hover:text-blue-400"
           >
           <FaLinkedin />
           </Link>
           <Link
             href="https://github.com/shuremali02"
             aria-label="GitHub"
             className="text-white hover:text-blue-400"
           >
           <FaGithub />
           </Link>
           <Link
             href="https://www.facebook.com/syed.shuremali?mibextid=ZbWKwL" // Placeholder link
             aria-label="Facebook"
             className="text-white hover:text-blue-400"
           >
             <FaFacebook />
         </Link>
         <Link
             href="//linkedin.com/in/syed-shurem-ali-5a55852a0"
             aria-label="Instagram"
             className="text-white hover:text-blue-400"
           >
             <FaInstagram />
           </Link>
         </div>

         <div className="text-sm text-center text-white font-medium">
           {/* Copyright and rights reserved text */}

           All rights reserved. &copy; Copyright{" "}
           <Link href="/">
            Greens Group
           </Link>{" "}
           2024
         </div>
       </div>
     </footer>
  );
}