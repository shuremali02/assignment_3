
import Link from 'next/link';
import Header from './Header';
import { FaFacebook, FaLinkedin, FaGithub,} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-screen " style={{ backgroundImage: "url(https://i.pinimg.com/564x/90/63/00/906300fb43691f388d9eb8624474b426.jpg)" }}>
      {/* Overlay */}
      <Header/>
      <div className="absolute inset-0 bg-white opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-0">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          We are the leaders in <span className="text-blue-400">Interior Planning</span>
        </h1>
        
        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl max-w-3xl text-black">
          Creating exceptional spaces and service solutions for todays living. We are committed to delivering high-quality projects tailored to your lifestyle.
        </p>
        
        {/* CTA Button */}
        <Link href="#">
          <p className="mt-6 inline-block px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-full">
            Explore our work
          </p>
        </Link>
        
        {/* Social Icons */}
        <div className="flex space-x-4 mt-6 ">
          <Link href="">
            <p className="text-black">
              <i className="hover:text-blue-600"><FaFacebook size={38}/></i> 
            </p>
          </Link>
          <Link href="#">
            <p className="text-black">
              <i className="hover:text-blue-600">
                <FaGithub size={38}/>
                </i> 
            </p>
          </Link>
          <Link href="#">
            <p className="text-black">
              <i className="hover:text-blue-600">
                <FaLinkedin size={38}/></i> 
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
