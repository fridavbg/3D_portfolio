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
    linkedin,
    php,
    symfony,
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
    {
        name: "php",
        icon: php,
    },
];

const experiences = [
    {
        title: "Software engineering with emphasis on Web Technlogies",
        company_name:
            "Blekinge Institute of Technology (BTH) - Karlskrona, Sweden",
        icon: dbwebb,
        iconBg: "#9D0208",
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
        iconBg: "#9D0208",
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
        name: "Spellchecker",
        description:
            "A python project where I implement a spellchecker with a trie data structure. A end of course project from a course where I learned Object Oriented Programming in Python",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "data_structures",
                color: "green-text-gradient",
            },
            {
                name: "OOP",
                color: "pink-text-gradient",
            },
        ],
        image: python,
        source_code_link: "https://github.com/fridavbg/spellchecker.py",
        demo_link: "",
    },
    {
        name: "Spark",
        description:
            "A group project from a course called Virtual Teams. In this course I was reponsible for building the API. It is complete electric scooter system containing both client and server side, a mobile app, API, database and also includes a simulation for the system.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "react-native",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "MySQL",
                color: "orange-text-gradient",
            },
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "docker",
                color: "blue-text-gradient",
            },
        ],
        image: spark,
        source_code_link: "https://github.com/Spark-Vteam/Spark-Project",
        demo_link: "",
    },
    {
        name: "React TextEditor - Frontend",
        description:
            "A small google doc clone, implemented with sockets so that more than one user can write in the same document.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "socket.io",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: reactjs,
        source_code_link: "https://github.com/fridavbg/jsramverk-texteditor",
        demo_link: "",
    },
    {
        name: "React TextEditor - Backend",
        description:
            "A small google doc clone, implemented with sockets so that more than one user can write in the same document.",
        tags: [
            {
                name: "mongodb",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
        ],
        image: nodejs,
        source_code_link: "https://github.com/fridavbg/jsramverk-texteditor",
        demo_link: "",
    },
    {
        name: "The sea and marine resource",
        description:
            "SPA (in swedish) in order to show the production in plastic",
        tags: [
            {
                name: "PHP - symfony",
                color: "blue-text-gradient",
            },
            {
                name: "javaScript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: php,
        source_code_link: "https://github.com/fridavbg/mvc/tree/main/report",
        demo_link: "",
    },
];

export { links, technologies, experiences, projects };
