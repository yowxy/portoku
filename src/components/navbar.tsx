import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavbarPages = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F2F2F2] shadow-md w-full max-w-[577px] m-auto mt-11 rounded-[37px] overflow-hidden" data-aos="fade-down">
      {/* Header bar */}
      <div className="h-[74px] flex items-center justify-between px-6 poppins">
        {/* Logo */}
        <a href="#home" className="text-lg font-bold text-black">
          Iklil
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black font-semibold">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-6 py-6 items-center text-black font-semibold md:hidden bg-white border-t border-gray-300 animate-slideDown">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Project</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
        </ul>
      )}
    </nav>
  );
};

export default NavbarPages;
