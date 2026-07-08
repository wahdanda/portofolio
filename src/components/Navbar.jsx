import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <>    <nav className=" outline-1 bg-gray-900 text-white p-5 flex justify-between items-center fixed top-0 left-0 w-full z-50 pr-46 ">
      <p className="text-2xl font-bold font-inika ml-40">Danda.</p>
      <ul className="flex space-x-4 justify-center gap-6 ">
        <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2">
            <a href="Hero.jsx">Home</a>
        </li>
          <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2">
            <a href="About.jsx">About</a>
          </li>
          <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2">
            <a href="Skill.jsx">Skill</a>
          </li>
          <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2">
            <a href="Project.jsx">Project</a>
          </li>
          <li className="hover:underline underline-offset-20 decoration-2 decoration-transparent hover:decoration-blue-500 transition duration-300 font-lato mt-2">
            <a href="Footer.jsx">footer</a>
          </li>
          <li >
            <button className=" outline-2 outline-blue-500 hover:outline-white rounded-xl p-2 hover:bg-blue-500 transition duration-300 font-lato"> 
              <a href=".../assets/file/manual.docx" download>Download CV</a>
            </button>
          </li>
      </ul>
    </nav>

    <div className="floating fixed bottom-0 right-0 m-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 cursor-pointer">
      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
        <Icon icon="mdi:whatsapp" height="2em" className="text-white" />
      </a>
    </div>
    </>

  );
}

export default Navbar;