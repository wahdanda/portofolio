import { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo/logo1.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>    
    <nav className="fixed top-0 left-0 w-screen  bg-[#111827] text-white z-50 outline-1">
    <div className="max-w-7xl mx-auto flex justify-between  items-center px-6 py-5 xl:pl-34 xl:pr-36">

        <h1 className="text-2xl font-bold font-inika flex">
            <img src={logo} className="w-10 h-10 mr-3"></img>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-lato">
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2 " ><a href="#Hero">Home</a></li>
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2"><a href="#About">About</a></li>
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2"><a href="#Skill">Skill</a></li>
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2"><a href="#Project">Project</a></li>
            <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2"><a href="#Contact">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 transition hover:border-white  hover:-translate-y-1 ease-in-out hover:scale-110 duration-300">
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

    <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#0F172A]
        overflow-hidden transition-all duration-500 ease-in-out
        ${menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
        >
        <div className="flex flex-col items-center gap-6 py-8">

            <a
            href="#Hero"
            className={`transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
            onClick={() => setMenuOpen(false)}
            >
            Home
            </a>

            <a
            href="#About"
            className={`transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
            onClick={() => setMenuOpen(false)}
            >
            About
            </a>

            <a
            href="#Skill"
            className={`transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
            onClick={() => setMenuOpen(false)}
            >
            Skill
            </a>

            <a
            href="#Project"
            className={`transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
            onClick={() => setMenuOpen(false)}
            >
            Project
            </a>

            <a
            href="#Contact"
            className={`transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
            onClick={() => setMenuOpen(false)}
            >
            Contact
            </a>

            <button
            className={`w-[90%] bg-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
            >
            <a href={`${import.meta.env.BASE_URL}CV.pdf`}>
                Download CV
            </a>
            </button>

        </div>
        </div>
    </nav>

    <div className="floating fixed bottom-5 right-5 -ml-40 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 cursor-pointer z-10">
        <a href="https://wa.me/6281337514360" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:whatsapp" height="2em" className="text-white" />
        </a>
    </div>
    </>

    );
}

export default Navbar;