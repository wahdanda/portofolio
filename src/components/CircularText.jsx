    import { useState } from "react";
    import { motion } from "motion/react";

    export default function CircularText({
    text = "THE • SKILLS • THE • SKILLS • ",
    spinDuration = 20,
    onHover = "speedUp",
    className = "",
    }) {
    const [duration, setDuration] = useState(spinDuration);

    const handleHover = () => {
        switch (onHover) {
        case "speedUp":
            setDuration(spinDuration / 4);
            break;

        case "slowDown":
            setDuration(spinDuration * 2);
            break;

        case "goBonkers":
            setDuration(spinDuration / 8);
            break;

        case "pause":
            setDuration(999999);
            break;

        default:
            setDuration(spinDuration);
        }
    };

    const handleLeave = () => {
        setDuration(spinDuration);
    };

    return (
        <motion.div
        className={`w-67.5 h-67.5 ${className}`}
        animate={{ rotate: 360 }}
        transition={{
            repeat: Infinity,
            ease: "linear",
            duration,
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        >
        <svg
            viewBox="0 0 300 300"
            className="w-full h-full overflow-visible"
        >
            <defs>
            <path
                id="circlePath"
                d="
                M150,150
                m-105,0
                a105,105 0 1,1 210,0
                a105,105 0 1,1 -210,0
                "
            />
            </defs>

            <text
            fill="white"
            fontSize="24"
            fontWeight="800"
            letterSpacing="5"
            >
            <textPath
                href="#circlePath"
                startOffset="0%"
            >
                {text}
            </textPath>
            </text>
        </svg>
        </motion.div>
    );
    }