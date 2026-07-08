import { Icon } from "@iconify/react";

function About() {
    return (
        <div className=" bg-white items-start text-black py-5 px-48 w-screen -ml-48">
            <h1 className="text-left text-blue-500 font-inika font-bold">About Us</h1>
            <div className="flex gap-3 justify-between">            
                <div className="text-left grid gap-2 w-170">
                    <h1 className="font-inika text-3xl">How I Am</h1>
                    <p >I am a vocational student majoring in Software Engineering (RPL) with a strong passion for web development. I enjoy turning ideas into real websites that are useful and user-friendly.</p>
                    <p>My goal is to become a Full-Stack Developer and study in Australia to gain knowledge, experience, and build a better future.</p>
                    <button className="outline-3 outline-blue-500 flex w-60 rounded-xl py-2 px-6 hover:outline-white text-blue-500 p-2 hover:bg-blue-500 transition duration-300 hover:text-white ">
                        <a className=" flex hover:text-white -mb-3">Read More About Me <Icon icon="ic:outline-person" height="1.4em" className="ml-3" /></a>
                    </button>
                </div>
                <div className=" outline-1 outline-gray-100 shadow-2xl w-2xl grid grid-cols-2 justify-center text-left p-5">
                    <div className="flex gap-4 border-b-2 border-r-2 p-2 border-gray-400">
                        <Icon icon="pixel:calender" height="3em" className="text-blue-500"/>
                        <div>
                            <h1 className="text-xl font-bold font-inika">Education</h1>
                            <p>Vocational High Schooll Software Engineering (RPL)</p>
                        </div>
                    </div>
                    <div className="flex gap-4 border-b-2 border-l-2 p-2 border-gray-400">
                        <Icon icon="mdi:location" height="2em" className="text-blue-500"/>
                        <div>
                            <h1 className="text-xl font-bold font-inika">Location</h1>
                            <p>Ball, Indonesia</p>
                        </div>
                    </div>
                    <div className="flex gap-4 border-t-2 border-r-2 p-2 border-gray-400">
                        <Icon icon="octicon:goal-24" height="3em" className="text-blue-500"/>
                        <div>
                            <h1 className="text-xl font-bold font-inika">Goal</h1>
                            <p>Study in Australia Become Full-Stack Developer</p>
                        </div>
                    </div>
                    <div className="flex gap-4 border-t-2 border-l-2 p-2 border-gray-400">
                        <Icon icon="mdi:heart-outline" height="3em" className="text-blue-500"/>
                        <div>
                            <h1 className="text-xl font-bold font-inika">Passion</h1>
                            <p>Coding, Problem Solving and Building Websites</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default About;