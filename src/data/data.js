import {
    JavascriptOriginal,
    PythonOriginal,
    Html5Original,
    Css3Original,
    ExpressOriginal,
    ReactOriginal,
    NextjsOriginal,
    TailwindcssOriginal,
    BootstrapPlain,
    NodejsOriginal,
    MongodbPlain,
    PostmanPlain,
    MysqlOriginalWordmark,
    PostgresqlOriginal,
    FigmaOriginal
} from "devicons-react"

// Constants
const githubLink = "https://github.com/quan91200"

// Mô tả hồ sơ
export const profileDescription = [
    "I am Nguyen Minh Quan, an enthusiastic front-end developer with a strong desire to learn and develop. Although I do not have much experience, I make up for it with hard work, dedication and a genuine desire to improve my skills!",
];

// Mẫu kinh nghiệm làm việc
export const workExperienceTemplate = [
    {
        key: 1,
        company: "",
        description: [
            "",
        ],
        duration: "",
        designation: "",
        type: "work",
    },
]

// GitHub Repositories
export const githubRepos = [
    {
        name: "React Form Validation App",
        techUsed: ["React"],
        description: "React Form Validation App uses Yup to validate data in forms, ensuring users enter correct information and providing immediate feedback.",
        githubLink: `${githubLink}/react-form-validation`,
        liveURL: "https://react-form-validation-navy.vercel.app/",
    },
    {
        name: "Multi Language App",
        techUsed: ["React", "TailwindCSS"],
        description:
            "Multilingual apps allow users to easily switch interface languages, optimizing the experience and expanding global accessibility.",
        githubLink: `${githubLink}/react-multiple-language-app`,
        liveURL: "https://react-multiple-language-app.vercel.app/",
    },
    {
        name: "Weather App",
        techUsed: ["React", "TailwindCSS"],
        description:
            "The Weather React App is a weather forecasting tool that allows users to look up information by location. Intuitive interface, displays current temperature and weather conditions, uses API to update real-time data.",
        githubLink: `${githubLink}/react-weather-app`,
        liveURL: "https://react-weather-app-teal-phi.vercel.app/",
    },
    {
        name: "Calculator App",
        techUsed: ["React"],
        description:
            "Calculator React App is a simple calculator application that allows performing basic mathematical operations. With a user-friendly and responsive interface, it offers a smooth and easy-to-use user experience.",
        githubLink: `${githubLink}/react-calculator-app`,
        liveURL: "https://react-calculator-app-orcin.vercel.app/",
    },
    {
        name: "Darkmode App",
        techUsed: ["React"],
        description:
            "Dark Mode in React allows users to easily switch between light and dark modes, providing a more comfortable experience for the eyes and optimized performance.",
        githubLink: `${githubLink}/react-darkmode-app`,
        liveURL: "https://react-darkmode-app-nine.vercel.app/",
    },
    {
        name: "Window11 Demo",
        techUsed: ["React", "TailwindCSS"],
        description: "",
        githubLink: "https://github.com/quan91200/react-demo-window11-clone",
        liveURL: "https://react-demo-window11-clone.vercel.app/"
    }
]

// Education
export const educationExperience = [
    {
        key: 1,
        institution: "Phenikaa University",
        industry: "Information Technology",
        graduation: "9/2021 - now",
        type: "education",
    },
    {
        key: 2,
        institution: "Da Phuc High School",
        graduation: "2019-2021",
        type: "education",
    },
]

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
    {
        key: 1,
        name: "Python",
        type: "language",
        icon: PythonOriginal ? (
            <PythonOriginal className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 2,
        name: "JavaScript",
        type: "language",
        icon: JavascriptOriginal ? (
            <JavascriptOriginal className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 3,
        name: "HTML",
        type: "language",
        icon: Html5Original ? (
            <Html5Original className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 4,
        name: "CSS",
        type: "language",
        icon: Css3Original ? (
            <Css3Original className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 5,
        name: "React",
        type: "framework",
        icon: ReactOriginal ? (
            <ReactOriginal className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 6,
        name: "Next.js",
        type: "framework",
        icon: NextjsOriginal ? (
            <NextjsOriginal className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 7,
        name: "TailwindCSS",
        type: "framework",
        icon: TailwindcssOriginal ? (
            <TailwindcssOriginal className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 8,
        name: "Bootstrap",
        type: "framework",
        icon: BootstrapPlain ? (
            <BootstrapPlain className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 9,
        name: "Node.JS",
        type: "framework",
        icon: NodejsOriginal ? (
            <NodejsOriginal className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 10,
        name: "MongoDB",
        type: "database",
        icon: MongodbPlain ? (
            <MongodbPlain className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 11,
        name: "Postman",
        type: "tool",
        icon: PostmanPlain ? (
            <PostmanPlain className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 12,
        name: "Express",
        type: "framework",
        icon: ExpressOriginal ? (
            <ExpressOriginal className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 13,
        name: "MySQL",
        type: "database",
        icon: MysqlOriginalWordmark ? (
            <MysqlOriginalWordmark className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 14,
        name: "PostgreSQL",
        type: "database",
        icon: PostgresqlOriginal ? (
            <PostgresqlOriginal className={iconClass} size={iconSize} />
        ) : null,
    },
    {
        key: 15,
        name: "Figma",
        type: "tool",
        icon: FigmaOriginal ? (
            <FigmaOriginal className={iconClass} size={iconSize} />
        ) : null,
    },
]

const appsData = [
    {
        id: 1,
        name: "Google Chrome",
        icon: "/images/apps/chrome.png",
        action: "browser",
        size: "w-18 h-18",
    },
    {
        id: 2,
        name: "About Me",
        icon: "/images/apps/folder.png",
        action: "explorer",
        size: "w-18 h-18",
    },
    {
        id: 3,
        name: "Recycle Bin",
        icon: "/images/apps/recyclebin.png",
        action: "recycle",
        size: "w-14 h-14",
    },
    {
        id: 4,
        name: "Microsoft Edge",
        icon: "/images/apps/edge.png",
        action: "browser",
        size: "w-11 h-11",
    },
    {
        id: 5,
        name: "VS Code",
        icon: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
        action: "vscode",
        size: "w-8 h-8",
    },
    {
        id: 6,
        name: "Spotify",
        icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
        action: "app",
        subAction: "spotify",
        size: "w-10 h-10",
    },
]

// Export
export default appsData

export const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/cobham-nguyen/",
    github: githubLink,
}