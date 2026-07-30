    import { memo } from "react";
    import { Icon } from "@iconify/react";
    import OrbitImages from "./Orbit";
    import CircularText from "./CircularText";
    import profile from "../assets/img/foto.jpg";

    const images = [
    <Icon icon="logos:html-5" className="w-10 h-10" />,
    <Icon icon="logos:css-3" className="w-10 h-10" />,
    <Icon icon="logos:javascript" className="w-10 h-10" />,
    <Icon icon="logos:react" className="w-10 h-10" />,
    <Icon icon="logos:tailwindcss-icon" className="w-10 h-10" />,
    <Icon icon="logos:mysql" className="w-10 h-10" />,
    <Icon icon="logos:figma" className="w-10 h-10" />,
    <Icon icon="skill-icons:wordpress" className="w-10 h-10" />,
    ];

    function Skill() {
    return (
        <section
        id="Skill"
        className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-linear-to-br
        "
        >
<OrbitImages
    images={images}
    shape="ellipse"
    responsive
    fill
    baseWidth={900}
    radiusX={440}
    radiusY={200}
    duration={28}
    rotation={-10}
    itemSize={72}
    showPath
    pathColor="rgba(255,255,255,.12)"
    pathWidth={2}
    centerContent={
        <div className="relative flex items-center justify-center">
        <div className="absolute w-[320px] h-80 flex items-center justify-center">
            <CircularText
                text="• THE SKILLS • THE SKILLS • THE SKILLS •"
                spinDuration={18}
                onHover="speedUp"
            />
        </div>

        <div
            className="
                w-36
                h-36
                rounded-full
                overflow-hidden
                border-4
            "
        >
                <img
                    src={profile}
                    className="w-full h-full object-cover"
                />
            </div>

        </div>
    }
/>
        </section>
    );
    }

    export default memo(Skill);
    