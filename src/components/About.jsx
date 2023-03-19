import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { links } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const LinkCard = ({ index, title, link, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 3,
                    speed: 250,
                }}
                className="bg-tertiary rounded-[18px] py-3 px-10 min-h-[250px] flex justify-evenly items-center flex-col"
            >
                <a href={link} target="_blank">
                    <img
                        src={icon}
                        alt="web-development"
                        className="w-16 h-16 object-contain"
                    />
                </a>
                <h3 className="text-blue-200 text-[20px] font-bold text-center">
                    <p>My {title} profile</p>
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Introduction</p>
                <p className={styles.sectionHeadText}>Overview.</p>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                My name is Frida and I'm originally from Sweden, but have been
                living in Barcelona, Spain for the last 14 years.
                <br />
                <br />
                I am a Major bookworm who is currently studying web development
                remotely at a Swedish University, Blekinge Institute of
                Technology. I wiil be graduating now in May (2023), so looking
                for a company that is willing to provide my first experience as
                a graduate.
                <br />
                <br />
                Mostly like coding in JavaScript and Python, but also have done
                some projects in PHP. 🖥
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {links.map((link, index) => (
                    <LinkCard
                        key={link.title}
                        index={index}
                        {...link}
                    />
                ))}
            </div>{" "}
        </>
    );
};

export default SectionWrapper(About, "about");
