import { Icon } from "@iconify/react";

function Footer() {
    return (
        <footer
        id="Contact"
        className="bg-[#0B1220] border-t text-left border-white/10 text-white py-16 px-6 md:px-12"
        >
        <div className="max-w-7xl mx-auto">

            {/* Title */}
            <p className="text-blue-500 font-semibold uppercase tracking-widest mb-2">
            Contact
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left */}
            <div className="">
                <h2 className="text-4xl font-bold mb-4">
                Let's Work Together
                </h2>

                <p className="text-gray-400 leading-8 w">
                I'm open to new opportunities and collaborations.
                Feel free to contact me anytime.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4            ">
            {/* Email */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3 font-semibold">
                    <Icon
                        icon="line-md:email"
                        className="text-2xl text-blue-500"
                    />
                    Email
                    </div>

                    <a
                    href="mailto:gstngrdandahasta@gmail.com"
                    className="text-gray-400 hover:text-blue-400 break-all transition"
                    >
                    gstngrdandahasta
                    <br />
                    @gmail.com
                    </a>
                </div>

                {/* Location */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3 font-semibold">
                    <Icon
                        icon="mdi:map-marker"
                        className="text-2xl text-blue-500"
                    />
                    Location
                    </div>

                    <p className="text-gray-400">
                    Bali,
                    <br />
                    Indonesia
                    </p>
                </div>

                {/* Github + Linkedin */}
                    <div>
                    <div className="flex items-center gap-3 font-semibold mb-2 space-y-2">
                        <Icon
                        icon="mdi:github"
                        className="text-2xl text-blue-500"
                        />
                        GitHub
                    </div>

                    <a
                        href="https://github.com/wahdanda"
                        target="_blank"
                        className="text-gray-400 hover:text-blue-400 break-all"
                    >
                        github.com/wahdanda
                    </a>
                    </div>

                    <div className=" items-center gap-3 font-semibold mb-2 space-y-2">
                    <div className="flex items-center gap-3 font-semibold mb-2">
                        <Icon
                        icon="mdi:linkedin"
                        className="text-2xl text-blue-500"
                        />
                        LinkedIn
                    </div>

                    <a
                        href="https://www.linkedin.com/in/gusti-ngurah-danda-hasta-7b59a1420"
                        target="_blank"
                        className="text-gray-400 hover:text-blue-400 break-all"
                    >
                        linkedin.com/in/
                        <br />
                        gusti-ngurah-danda-hasta
                    </a>
                    </div>
            </div>
            </div>
            {/* Divider */}
            <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-gray-500 text-sm text-center">
                © 2026 Gusti Ngurah Danda Hasta. All Rights Reserved.
            </p>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-12 h-12 rounded-xl border border-white/10 hover:border-blue-500 hover:bg-blue-500 transition flex items-center justify-center"
            >
                <Icon
                icon="mingcute:arrow-up-line"
                className="text-2xl"
                />
            </button>

            </div>

        </div>
        </footer>
    );                        
}

export default Footer;

