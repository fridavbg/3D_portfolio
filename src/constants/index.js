import {
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    github,
    python,
    docker,
    dbwebb,
    codeop,
    spark,
    texteditor,
    linkedin,
    web,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "project",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const links = [
    {
        title: "Github",
        link: "https://github.com/account",
        icon: github,
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/fridavbg/",
        icon: linkedin,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software engineering with emphasis on Web Technlogies",
        company_name:
            "Blekinge Institute of Technology (BTH) - Karlskrona, Sweden",
        icon: dbwebb,
        iconBg: "#370617",
        date: "August 2021 - May 2023",
        points: [
            "Programming in various types of web development, in order to teach more advanced code for various types of applications och web services.",
            "Web based frameworks, both on the client - and server side, open source kod, database design and testing environments.",
            "Two year remote programme",
        ],
    },
    {
        title: "Web development Fullstack Bootcamp",
        company_name: "CodeOp - Barcelona, Spain",
        icon: codeop,
        iconBg: "#370617",
        date: "September 2019 - Feb 2020",
        points: [
            "Programming fundamentals, advanced JavaScript, data structures, and algorithms.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "Spark",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: spark,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: texteditor,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://github.com/",
    },
];

export { links, technologies, experiences, projects };
