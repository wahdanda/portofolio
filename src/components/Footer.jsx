import { memo } from "react";
import { Icon } from "@iconify/react";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            id="Contact"
            aria-label="Contact Section"
            className="bg-[#0B1220] border-t border-white/10 text-white py-16 px-6 md:px-12 xl:px-20"
        >
            <div className="max-w-7xl mx-auto">
                <p className="text-blue-500 font-semibold uppercase tracking-widest mb-2 text-sm">
                    Contact
                </p>

                <div className="grid text-start -cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Info */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Let's Work Together
                        </h2>
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            I'm open to new opportunities and collaborations. Feel free to contact me anytime.
                        </p>
                    </div>

                    {/* Right Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Email */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 font-semibold text-gray-200">
                                <Icon icon="line-md:email" className="text-2xl text-blue-500" aria-hidden="true" />
                                <span>Email</span>
                            </div>
                            <a
                                href="mailto:gstngrdandahasta@gmail.com"
                                className="text-gray-400 hover:text-blue-400 break-all transition-colors block text-sm"
                            >
                                gstngrdandahasta@gmail.com
                            </a>
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 font-semibold text-gray-200">
                                <Icon icon="line-md:map-marker" className="text-2xl text-blue-500" aria-hidden="true" />
                                <span>Location</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Bali, Indonesia
                            </p>
                        </div>

                        {/* GitHub */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 font-semibold text-gray-200">
                                <Icon icon="line-md:github" className="text-2xl text-blue-500" aria-hidden="true" />
                                <span>GitHub</span>
                            </div>
                            <a
                                href="https://github.com/wahdanda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 break-all transition-colors block text-sm"
                            >
                                github.com/wahdanda
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 font-semibold text-gray-200">
                                <Icon icon="line-md:linkedin" className="text-2xl text-blue-500" aria-hidden="true" />
                                <span>LinkedIn</span>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/gusti-ngurah-danda-hasta-7b59a1420"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 break-all transition-colors block text-sm"
                            >
                                gusti-ngurah-danda-hasta
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © 2026 Gusti Ngurah Danda Hasta. All Rights Reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll back to top of page"
                        className="w-12 h-12 rounded-xl border border-white/10 hover:border-blue-500 hover:bg-blue-600 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <Icon icon="mingcute:arrow-up-line" className="text-2xl text-white" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);