import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    docker,
    todo,
    mern
} from "../assets";

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
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Typescript",
        icon: typescript,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const projects = [
    {
        name: "Mern blog app",
        description:
            "A blog app using mern stack with authentication",
        tags: [
            {
                name: "mern",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "react-router-dom",
                color: "pink-text-gradient",
            },
            {
                name: "jwt",
                color: "green-text-gradient",
            }

        ],
        image: mern,
        source_code_link: "https://github.com/ppPacific/mern",
    },
    {
        name: "Todo list",
        description:
            "A todo list with simple UI using typescript, react(vite) and mui.",
        tags: [
            {
                name: "react vite",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "mui",
                color: "pink-text-gradient",
            },

        ],
        image: todo,
        source_code_link: "https://github.com/ppPacific/tstodo/tree/view",
    }
];
export { projects, technologies };