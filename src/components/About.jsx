import { Icon } from "@iconify/react";

function About() {
    return (
        <section
        id="About"
        className="bg-white text-black py-20 px-6 sm:px-10 lg:px-10 xl:px-2 xl:w-screen xl:-ml-48"
        >
        <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-2">
            About Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center md:justify-between md:text-left xl:px-50 ">
            {/* Left */}
            <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold font-inika mb-2">
                Who I Am
            </h1>

            <p className="text-gray-700 leading-8 mb-6 xl:w-110">
                I am a vocational student majoring in Software Engineering (RPL)
                with a strong passion for web development. I enjoy turning ideas
                into real websites that are useful and user-friendly.
            </p>

            <p className="text-gray-700 leading-8 mb-8 xl:w-110" >
                My goal is to become a Full-Stack Developer and study in Australia
                to gain knowledge, experience, and build a better future.
            </p>

            <button className="flex items-center gap-2 border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-xl hover:bg-blue-500 hover:text-white hover:border-white duration-300">
                Read More About Me
                <Icon icon="ic:outline-person" width="22" />
            </button>
            </div>

            {/* Right */}
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 border border-gray-300 rounded-xl overflow-hidden shadow-xl">

                <div className="flex gap-4 p-6 xl:py-6 xl:px-2 border-b sm:border-r">
                    <Icon
                    icon="material-symbols:school-outline"
                    className="text-blue-500 text-5xl xl:w-20"
                    />
                    <div>
                    <h3 className="font-bold text-xl mb-2">Education</h3>
                    <p className="text-gray-600">
                        Vocational High School
                        Software Engineering (RPL)
                    </p>
                    </div>
                </div>

                <div className="flex gap-4 p-6 xl:py-6 xl:px-2 border-b">
                    <Icon
                    icon="mdi:map-marker-outline"
                    className="text-blue-500 text-5xl"
                    />
                    <div>
                    <h3 className="font-bold text-xl mb-2">Location</h3>
                    <p className="text-gray-600">
                        Bali,
                        Indonesia
                    </p>
                    </div>
                </div>

                <div className="flex gap-4 p-6 xl:py-6 xl:px-2 border-b sm:border-b-white sm:border-r">
                    <Icon
                    icon="mdi:target"
                    className="text-blue-500 text-5xl xl:w-20"
                    />
                    <div>
                    <h3 className="font-bold text-xl mb-2">Goal</h3>
                    <p className="text-gray-600">
                        Study in Australia
                        Become Full-Stack Developer
                    </p>
                    </div>
                </div>

                <div className="flex gap-4 p-6 xl:py-6 xl:px-2">
                    <Icon
                    icon="mdi:heart-outline"
                    className="text-blue-500 text-5xl xl:w-20"
                    />
                    <div>
                    <h3 className="font-bold text-xl mb-2">Passion</h3>
                    <p className="text-gray-600">
                        Coding,
                        Problem Solving &
                        Building Websites
                    </p>
                    </div>
                </div>

            </div>
        </div>
        </section>
    );
    }

export default About;