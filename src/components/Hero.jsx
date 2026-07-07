import { Icon } from "@iconify/react";


function Hero() {
    return (
        <div className="bg-black  text-white p-5 flex justify-left items-center h-screen">
            <div className="text-left ">
                <p className=" mb-4 font-lato">Hello, I'm</p>
                <h1 className="text-3xl  font-bold font-inika">Gusti Ngurah Danda Hasta</h1>
                <h1 className="text-4xl font-semibold mb-4 text-blue-500 font-inika">Web Developer</h1>
                <p className="mb-8 w-100 font-lato">I build responsive and modern websites using HTML, CSS, Tailwind CSS, JavaScript, react and MySQL.</p>
                <a href="#about" className=" flex gap-4 bg-blue-500 w-40 p-3  rounded-md hover:bg-blue-600 transition-colors cursor-pointer hover:-translate-y-2 *:transition-transform duration-300">View My Work <Icon icon="line-md:arrow-right" className="mt-1" /></a> 
                <div className="flex gap-5 mt-8">
                    <a href="https://github.com/gusti-ngurah-danda-hasta" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 hover:text-blue-500">
                        <Icon icon="mdi:github" height="3em" />
                    </a>
                    <a href="https://www.linkedin.com/in/gusti-ngurah-danda-hasta" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 hover:text-blue-500">
                        <Icon icon="prime:linkedin" height="3em" />
                    </a>
                    <a href="mailto:gusti.ngurah.danda.hasta@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 hover:text-blue-500">
                        <Icon icon="mdi:gmail" height="3em" />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Hero;