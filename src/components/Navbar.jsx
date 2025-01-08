import logo from "../assets/logo3.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        
      </div>

      {/* Social Media Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/sauman-raaj-3323951bb" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition duration-300"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/saumanraaj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition duration-300"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/sauman_raaj/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition duration-300"
        >
          <FaInstagram />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
