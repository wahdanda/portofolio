import { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo/logo1.webp"
import GooeyNav from './GooeyNav'

function Navbar() {
    const items = [
  { label: "Home", href: "#Hero" },
  { label: "About", href: "#About" },
  { label: "Skill", href: "#Skill" },
  { label: "Project", href: "#Project" },
  { label: "Contact", href: "#Contact" },
];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>    
    <nav className="fixed top-0 left-0 w-screen  bg-[#111827] text-white z-50 outline-1">
    <div className=" mx-auto flex justify-between  items-center px-6 py-5 xl:px-20">

        <h1 className="text-2xl font-bold font-inika flex">
            <img src={logo} className="w-10 h-auto mr-3" alt="Logo Danda Hasta" loading="lazy"></img>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-lato">
                <GooeyNav
                    items={items}
                    particleCount={10}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={100}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
        </div>

        {/* Desktop Button */}
            <a className="hidden md:block border border-emerald-400 px-6 py-3 rounded-lg hover:bg-emerald-400 transition hover:border-white  hover:-translate-y-1 ease-in-out hover:scale-110 duration-300" href={`${import.meta.env.BASE_URL}CV.pdf`}>Download CV</a>
        

        {/* Hamburger */}
        <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
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
            className={`w-[90%] bg-emerald-300 py-3 rounded-xl font-semibold hover:bg-emerald-300 transition-all duration-500 ${
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

    <div className=" z-20 text-white fixed bottom-5 right-0 -ml-40 p-3 grid gap-6 transition duration-300 cursor-pointer  md:bottom-50 md:right-5">
       <a
            href="https://github.com/wahdanda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-emerald-400 hover:scale-110"
        >
            <Icon
                icon="mdi:github"
                className="text-2xl"
                aria-hidden="true"
            />
        </a>

        <a
            href="https://www.linkedin.com/in/gusti-ngurah-danda-hasta-7b59a1420"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-emerald-300 hover:scale-110"
        >
            <Icon
                icon="prime:linkedin"
                className="text-2xl"
                aria-hidden="true"
            />
        </a>

        <a
            href="mailto:gstngrdandahasta@gmail.com"
            aria-label="Email"
            className="transition hover:text-emerald-400 hover:scale-110"
        >
            <Icon
                icon="mdi:gmail"
                className="text-2xl"
                aria-hidden="true"
            />
        </a>
    </div>
    </>

    );
}

export default Navbar;