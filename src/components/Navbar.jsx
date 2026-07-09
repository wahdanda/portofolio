import { useState } from "react";
import { Icon } from "@iconify/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>    
    <nav className="fixed top-0 left-0 w-screen  bg-[#111827] text-white z-50">
    <div className="max-w-7xl mx-auto flex justify-between  items-center px-6 py-5 xl:pl-34 xl:pr-36">

        <h1 className="text-2xl font-bold font-inika">
            Danda.
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-lato">
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2"><a href="#Hero">Home</a></li>
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2"><a href="#About">About</a></li>
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2"><a href="#Skill">Skill</a></li>
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2"><a href="#Project">Project</a></li>
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2"><a href="#Contact">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 transition hover:border-white">
            <a href={`${import.meta.env.BASE_URL}CV.pdf`}>Download CV</a>
        </button>

        {/* Hamburger */}
        <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <Icon
                icon={menuOpen ? "mdi:close" : "mdi:menu"}
            />
        </button>

    </div>

    {menuOpen && (
    <div className="md:hidden bg-[#111827] px-6 pb-5">

        <a href="#Hero" className="block py-3">Home</a>

        <a href="#About" className="block py-3">About</a>

        <a href="#Skill" className="block py-3">Skill</a>

        <a href="#Project" className="block py-3">Project</a>

        <a href="#Contact" className="block py-3">Contact</a>

        <button className="mt-4 w-full bg-blue-500 py-3 rounded-lg">
            <a href={`${import.meta.env.BASE_URL}CV.pdf`}>Download CV</a>
        </button>

    </div>
    )}
    </nav>

    <div className="floating fixed bottom-5 right-5 -ml-40 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 cursor-pointer">
      <a href="https://wa.me/6281337514360" target="_blank" rel="noopener noreferrer">
        <Icon icon="mdi:whatsapp" height="2em" className="text-white" />
      </a>
    </div>
    </>

  );
}

export default Navbar;