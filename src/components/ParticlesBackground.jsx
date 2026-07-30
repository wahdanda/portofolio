import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
    const [engine, setEngine] = useState(false);

    useEffect(() => {
        loadSlim().then(() => {
            setEngine(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },

            background: {
                color: "#000000",
            },

            fpsLimit: 60,

            particles: {
                number: {
                    value: 80,
                },

                color: {
                    value: "#ffffff",
                },

                links: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.25,
                    width: 1,
                },

                move: {
                    enable: true,
                    speed: 1,
                },

                size: {
                    value: 2,
                },

                opacity: {
                    value: 0.7,
                },
            },

            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },

                modes: {
                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.8,
                        },
                    },
                },
            },
        }),
        []
    );

    if (!engine) return null;

    return (
        <Particles
            id="particles"
            options={options}
            className="absolute inset-0 -z-10"
        />
    );
}